import { useState, useCallback } from 'react';

export const useSwipe = (onSwipeLeft, onSwipeRight, threshold = 50) => {
  const [touchStart, setTouchStart] = useState(null);

  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);

  const onTouchEnd = useCallback((e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > threshold) onSwipeLeft?.();
    if (distance < -threshold) onSwipeRight?.();
    setTouchStart(null);
  }, [touchStart, onSwipeLeft, onSwipeRight, threshold]);

  return { onTouchStart, onTouchEnd };
};
