'use client';

import { cn } from '@/utils';
import React from 'react';

export const Container = ({ id, children, className, as }) => {
  const Component = as || 'div';
  return (
    <Component className={cn('max-w-7xl mx-auto', className)} id={id}>
      {children}
    </Component>
  );
};
