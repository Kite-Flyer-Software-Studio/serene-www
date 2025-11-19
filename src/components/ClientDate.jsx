'use client';

import { useEffect, useState } from 'react';

export function ClientDate({ date, format = {} }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    // Only format date on client side to avoid hydration mismatch
    if (date) {
      const dateObj = new Date(date);
      setFormattedDate(
        dateObj.toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          ...format,
        })
      );
    }
  }, [date, format]);

  // Return empty div with same height during SSR to prevent layout shift
  if (!formattedDate) {
    return <div className="h-5" />;
  }

  return <>{formattedDate}</>;
}

