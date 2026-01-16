import { useEffect, useState, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  start?: number;
  shouldStart?: boolean;
}

export function useCountUp({
  end,
  duration = 2000,
  decimals = 2,
  start = 0,
  shouldStart = true,
}: UseCountUpProps) {
  const [value, setValue] = useState(start);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldStart) {
      setValue(start);
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = start + (end - start) * easeOutQuart;

      setValue(Number(currentValue.toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      startTimeRef.current = null;
    };
  }, [end, duration, decimals, start, shouldStart]);

  return value;
}
