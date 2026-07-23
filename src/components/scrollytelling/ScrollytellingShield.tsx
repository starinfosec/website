
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

export function ScrollytellingShield() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth transforms for the shield
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 1.2, 1, 1.1, 0.5]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, 0]);

  const smoothScale = useSpring(scale, { stiffness: 50, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-slate-950">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />

        {/* The Shield Visual */}
        <motion.div
          style={{
            scale: smoothScale,
            rotateY: smoothRotateY,
            opacity: opacity,
            y: smoothY,
            perspective: 1000
          }}
          className="relative w-[300px] md:w-[600px] aspect-square"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
          <Image
            src="/security-shield.webp"
            alt="StarInfoSec Rotating Shield"
            fill
            priority
            unoptimized
            className="object-contain drop-shadow-[0_0_80px_rgba(59,130,246,0.6)] brightness-110 contrast-125"
            sizes="(max-width: 768px) 300px, 600px"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://picsum.photos/seed/cyber-shield/800/800";
            }}
          />
        </motion.div>
      </div>

      {/* Content Overlays */}
      <div className="relative z-10">
        <Section content={{ title: "Elite Protection", sub: "Designed for the modern threat landscape." }} progress={scrollYProgress} range={[0.1, 0.25]} />
        <Section content={{ title: "Global Intelligence", sub: "Real-time threat monitoring and response." }} progress={scrollYProgress} range={[0.35, 0.5]} />
        <Section content={{ title: "Future Ready", sub: "Empowering the next generation of security experts." }} progress={scrollYProgress} range={[0.65, 0.8]} />
      </div>
    </div>
  );
}

function Section({ content, progress, range }: { content: { title: string, sub: string }, progress: any, range: [number, number] }) {
  const opacity = useTransform(progress, [range[0] - 0.1, range[0], range[1], range[1] + 0.1], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0] - 0.1, range[0], range[1], range[1] + 0.1], [50, 0, 0, -50]);

  return (
    <motion.section 
      style={{ opacity, y }}
      className="h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h2 className="font-headline text-5xl md:text-8xl font-bold text-white tracking-tighter mb-4 drop-shadow-2xl">
        {content.title}
      </h2>
      <p className="text-xl md:text-3xl text-blue-400 font-medium max-w-2xl mx-auto">
        {content.sub}
      </p>
    </motion.section>
  );
}
