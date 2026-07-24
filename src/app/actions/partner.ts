'use server';

import { checkRateLimit } from '@/lib/rate-limit';
import { headers } from 'next/headers';

export async function checkPartnerRateLimit() {
  const headersList = await headers();
  // Try to get standard forwarding headers for IPs, fallback to a default if unavailable
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';

  const isAllowed = checkRateLimit(ip);

  if (!isAllowed) {
    return { 
      error: 'Too many requests. Please try again later.',
      success: false 
    };
  }

  return { success: true };
}
