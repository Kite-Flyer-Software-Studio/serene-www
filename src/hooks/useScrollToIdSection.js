'use client';
import { useEffect, useRef } from 'react';

export const useScrollToIdSection = (offset = -70, behavior = 'smooth', delay = 100) => {
  const isInitialLoad = useRef(true);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = offset;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior });
    }
  };

  const handleHashChange = () => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      const id = hash.substring(1);
      setTimeout(() => {
        scrollToId(id);
      }, delay);
    }
  };

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const id = hash.substring(1);
        setTimeout(() => {
          scrollToId(id);
        }, delay + 200);
      }
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [offset, behavior, delay]);

  return scrollToId;
}