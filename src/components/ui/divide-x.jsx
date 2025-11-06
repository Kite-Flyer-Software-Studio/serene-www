'use client';

import { cn } from '@/utils';

export const DivideX = ({ className }) => {
  return <div className={cn('bg-divide h-[1px] w-full', className)} />;
};
