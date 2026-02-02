
'use client';

import { useEffect, useState } from 'react';
import { Logo } from "@/components/logo";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type SplashScreenProps = {
  isLoading: boolean;
};

export function SplashScreen({ isLoading }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(timer);
            return 100;
          }
          return prev + 5;
        });
      }, 70);

      return () => clearInterval(timer);
    }
  }, [isLoading]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-out",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <Logo className="h-24 w-24 mb-6" />
      <div className="w-1/4 max-w-xs">
        <Progress value={progress} className="w-full" />
      </div>
    </div>
  );
}
