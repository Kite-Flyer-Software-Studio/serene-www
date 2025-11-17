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
