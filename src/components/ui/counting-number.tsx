"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

interface CountingNumberProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function CountingNumber({ value, suffix = "", className }: CountingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && ref.current) {
          setHasAnimated(true);
          animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (latest) => {
              if (ref.current) {
                ref.current.textContent = Math.floor(latest).toString() + suffix;
              }
            },
          });
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, suffix, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
