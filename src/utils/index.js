import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

/**
 * Track Google Analytics events via Google Tag Manager dataLayer
 * @param {string} eventName - The name of the event
 * @param {Object} eventParams - Additional event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
};

/**
 * Get the base URL dynamically based on the current environment
 * @returns {string} The base URL (e.g., 'https://sereneexperience.com' or 'http://localhost:8000')
 */
export const getBaseUrl = () => {
  // Client-side: use window.location.origin
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  // Server-side: check environment variable or use default
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  // Fallback to production URL
  return 'https://sereneexperience.com';
};
