import { useState, useEffect } from 'react';

export const useTransition = (stage, duration = 300) => {
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const timer = setTimeout(() => setIsPending(false), duration);
    return () => clearTimeout(timer);
  }, [stage, duration]);

  return isPending;
};
