type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const rateLimitMap = new Map<string, RateLimitRecord>();

// Limit: 3 requests per 15 minutes (900000 ms)
const LIMIT = 3;
const WINDOW_MS = 15 * 60 * 1000;

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    // First request
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return true;
  }

  // If the window has expired, reset it
  if (now > record.resetAt) {
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return true;
  }

  // Window is active, check limit
  if (record.count >= LIMIT) {
    return false;
  }

  // Increment count
  record.count += 1;
  return true;
}
