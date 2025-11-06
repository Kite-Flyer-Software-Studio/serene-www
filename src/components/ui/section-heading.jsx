'use client';

import { cn } from '@/utils';

export const SectionHeading = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'text-charcoal-700 text-center text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl dark:text-neutral-100',
        className
      )}
    >
      {children}
    </h2>
  );
};
