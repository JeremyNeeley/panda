import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const src = path.join(root, "src");
const sourceFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) sourceFiles.push(full);
  }
}
walk(src);

const routes = new Set(["/"]);
for (const file of sourceFiles) {
  const rel = path.relative(path.join(src, "app"), file).replaceAll("\\", "/");
  if (!rel.endsWith("/page.tsx") && rel !== "page.tsx") continue;
  const route = rel === "page.tsx" ? "/" : `/${rel.replace(/\/page\.tsx$/, "")}`;
  routes.add(route);
}

const errors = [];
let linkCount = 0;
let importCount = 0;
for (const file of sourceFiles) {
  const text = fs.readFileSync(file, "utf8");

  for (const match of text.matchAll(/(?:from\s+|import\s*)["'](@\/[^"']+|\.{1,2}\/[^"']+)["']/g)) {
    importCount += 1;
    const specifier = match[1];
    const base = specifier.startsWith("@/")
      ? path.join(src, specifier.slice(2))
      : path.resolve(path.dirname(file), specifier);
    const candidates = [base, `${base}.ts`, `${base}.tsx`, path.join(base, "index.ts"), path.join(base, "index.tsx")];
    if (!candidates.some((candidate) => fs.existsSync(candidate))) {
      errors.push(`Missing local import: ${path.relative(root, file)} -> ${specifier}`);
    }
  }

  const linkPatterns = [
    /href\s*=\s*["'](\/[^"']*)["']/g,
    /href\s*=\s*\{["'](\/[^"']*)["']\}/g,
    /href:\s*["'](\/[^"']*)["']/g
  ];
  for (const pattern of linkPatterns) {
    for (const match of text.matchAll(pattern)) {
      linkCount += 1;
      const target = match[1].split(/[?#]/)[0] || "/";
      if (!routes.has(target)) errors.push(`Broken internal route: ${path.relative(root, file)} -> ${match[1]}`);
    }
  }
}

const required = [
  "src/app/page.tsx",
  "src/app/work/page.tsx",
  "src/app/services/page.tsx",
  "src/app/lab/page.tsx",
  "src/app/lab/system-readiness/page.tsx",
  "src/app/engineering/page.tsx",
  "src/app/about/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/start-project/page.tsx",
  "src/app/api/leads/route.ts",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/app/manifest.ts",
  "public/og-card.png",
  "supabase/schema.sql",
  ".env.example"
];
for (const requiredPath of required) {
  if (!fs.existsSync(path.join(root, requiredPath))) errors.push(`Missing release file: ${requiredPath}`);
}

const envExample = fs.readFileSync(path.join(root, ".env.example"), "utf8");
for (const key of [
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
  "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
  "TURNSTILE_SECRET_KEY",
  "RESEND_API_KEY",
  "LEAD_NOTIFICATION_EMAIL"
]) {
  if (!envExample.includes(`${key}=`)) errors.push(`Missing .env.example key: ${key}`);
}

if (errors.length) {
  console.error(`Release audit failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("PandaDigital.dev release audit passed.");
console.log(`Routes checked: ${routes.size}`);
console.log(`Source files checked: ${sourceFiles.length}`);
console.log(`Local imports checked: ${importCount}`);
console.log(`Internal links checked: ${linkCount}`);
