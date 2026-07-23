'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function ScrollShield() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const visiblePct = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      
      // Map scroll progress to rotation (e.g., -45 to 45 degrees)
      const newRotation = (visiblePct - 0.5) * 90;
      setRotation(newRotation);

      // Fade in effect
      const newOpacity = Math.min(1, visiblePct * 2);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-slate-950 flex items-center justify-center min-h-[60vh] md:min-h-[80vh]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center max-w-3xl">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6">
              Advanced <span className="text-primary">Threat Detection</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Our automated security shield rotates and adapts in real-time to neutralize emerging digital threats before they reach your network.
            </p>
          </div>

          <div 
            className="relative w-full max-w-[300px] md:max-w-[500px] aspect-square transition-all duration-300 ease-out"
            style={{ 
              transform: `perspective(1000px) rotateY(${rotation}deg) scale(${0.8 + (opacity * 0.2)})`,
              opacity: opacity
            }}
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            <Image
              src="/security-shield.webp"
              alt="Security Shield Animation"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.5)]"
              priority
              sizes="(max-width: 768px) 300px, 500px"
              onError={(e) => {
                // Fallback for development if file isn't there yet
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/seed/shield/800/800";
              }}
            />
          </div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
    </section>
  );
}
