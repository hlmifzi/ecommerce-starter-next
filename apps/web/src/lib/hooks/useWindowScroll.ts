import { useState, useEffect, useCallback } from 'react';

interface UseWindowScrollOptions {
  offset?: number;
  onScroll?: (isSticky: boolean) => void;
}

export const useWindowScroll = (options: UseWindowScrollOptions = {}) => {
  const { offset = 160, onScroll } = options;
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    
    const newSticky = currentScrollY > offset;
    if (newSticky !== isSticky) {
      setIsSticky(newSticky);
      onScroll?.(newSticky);
    }
  }, [offset, isSticky, onScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { isSticky, scrollY };
};

export default useWindowScroll;