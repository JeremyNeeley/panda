import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/portfolio/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Cybersecurity Engineering Services",
  description: "Application security, API security, authentication and authorization review, hardening, and secure architecture from Panda Digital Systems."
};

export default function CybersecurityServicePage() {
  return <ServiceDetailPage
    eyebrow="SERVICE / CYBERSECURITY"
    title="Security that changes engineering decisions."
    copy="Application security, API and authentication review, hardening, release-readiness checks, and secure architecture support focused on practical system boundaries rather than compliance theater."
    inquiryHref="/start-project?type=secure&service=Cybersecurity"
    starting="$1,000"
    bestFor={["Applications preparing to launch", "APIs with growing integration surface", "Role or permission complexity", "Teams hardening an existing product"]}
    outcomes={["Clearer trust boundaries", "Authorization issues identified", "Actionable hardening priorities", "Safer release assumptions"]}
    capabilities={[
      { title: "Application Security", copy: "Review application behavior, trust boundaries, sensitive flows, local storage, session behavior, and implementation assumptions." },
      { title: "API Security", copy: "Authorization, object access, validation, rate limits, secrets, error behavior, and integration boundaries reviewed as system concerns." },
      { title: "Authentication & Authorization", copy: "Separate identity from permission decisions and make role, tenant, and resource access explicit." },
      { title: "Security Reviews", copy: "Engineering-focused reviews that translate findings into prioritized changes instead of leaving a generic vulnerability list." },
      { title: "Hardening", copy: "Headers, configuration, secrets handling, dependency posture, release flags, environment boundaries, and defensive defaults." },
      { title: "Secure Development", copy: "Threat-aware architecture and implementation support so security questions appear before the release checklist." }
    ]}
    approach={[
      { code: "01", title: "Map trust", copy: "Identify users, services, devices, data, external systems, and where trust is currently assumed rather than verified." },
      { code: "02", title: "Trace sensitive actions", copy: "Follow authorization, data access, state changes, secrets, and privileged operations through the actual system." },
      { code: "03", title: "Prioritize impact", copy: "Distinguish theoretical concerns from issues that meaningfully change exposure, abuse potential, or release risk." },
      { code: "04", title: "Fix the design", copy: "Prefer architectural or reusable controls when possible so the same class of bug does not reappear feature by feature." }
    ]}
    proof={[
      { eyebrow: "ENGINEERING / SECURITY", title: "Authentication Is Not Authorization", copy: "Why identity alone never answers what a user or system should be allowed to do.", href: "/engineering/authentication-is-not-authorization" },
      { eyebrow: "WORK / MOBILE SECURITY", title: "U App — Interactive Mathematical System", copy: "A product case including protected local state and Android release-readiness/security review.", href: "/work/u-app" }
    ]}
  />;
}
