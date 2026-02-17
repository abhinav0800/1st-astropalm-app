import React from 'react';
import { useSwipe } from '../../hooks/useSwipe';

const SwipeContainer = ({ children, onSwipeLeft, onSwipeRight }) => {
  const swipeHandlers = useSwipe(onSwipeLeft, onSwipeRight);
  return (
    <div className="w-full h-full" {...swipeHandlers}>
      {children}
    </div>
  );
};
export default SwipeContainer;
