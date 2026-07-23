'use server';

import { checkRateLimit } from '@/lib/rate-limit';
import { headers } from 'next/headers';

export async function submitContactForm(prevState: any, formData: FormData) {
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

  try {
    const res = await fetch("https://formspree.io/f/mgvkqegg", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      return { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      };
    } else {
      return { 
        error: 'Failed to send message. Please try again.',
        success: false 
      };
    }
  } catch (err) {
    return { 
      error: 'An unexpected error occurred.',
      success: false 
    };
  }
}
