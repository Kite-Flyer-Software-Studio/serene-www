'use client';

import { cn } from '@/utils';

export const SubHeading = ({ children, className, as: Component = 'h2' }) => {
  return (
    <Component
      className={cn(
        'text-center text-sm font-medium tracking-tight text-gray-600 md:text-sm lg:text-base dark:text-gray-300',
        className
      )}
    >
      {children}
    </Component>
  );
};
