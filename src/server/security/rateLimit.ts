type Entry = { count: number; resetAt: number };

const buckets = new Map<string, Entry>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

export function checkLocalRateLimit(key: string) {
  const now = Date.now();
  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: LIMIT - 1 };
  }
  if (existing.count >= LIMIT) return { allowed: false, remaining: 0 };
  existing.count += 1;
  return { allowed: true, remaining: LIMIT - existing.count };
}
