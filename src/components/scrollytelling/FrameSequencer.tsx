'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const START_FRAME = 1;
const END_FRAME = 16;
const FRAME_PATH = '/frames/'; // Path to frames: 1.png, 2.png, ... 16.png

export function FrameSequencer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress (0-1) to frame number (1-16)
  const frameNumber = useTransform(smoothProgress, [0, 1], [START_FRAME, END_FRAME]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = START_FRAME; i <= END_FRAME; i++) {
        const img = new Image();
        img.src = `${FRAME_PATH}${i}.png`;
        const promise = new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one fails
        });
        promises.push(promise);
        loadedImages.push(img);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  // Handle Canvas Rendering
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx || images.length === 0) return;

      const currentFrameNum = Math.floor(frameNumber.get());
      // Calculate index in the images array (0-based)
      const index = Math.max(0, Math.min(images.length - 1, currentFrameNum - START_FRAME));
      const img = images[index] || images[0];

      // Responsive sizing
      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
      const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
      const height = typeof window !== 'undefined' ? window.innerHeight : 1080;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Draw image with "contain" fit
      const imgRatio = img.width / img.height;
      const canvasRatio = width / height;
      let drawWidth, drawHeight, x, y;

      if (imgRatio > canvasRatio) {
        drawWidth = width;
        drawHeight = width / imgRatio;
        x = 0;
        y = (height - drawHeight) / 2;
      } else {
        drawHeight = height;
        drawWidth = height * imgRatio;
        x = (width - drawWidth) / 2;
        y = 0;
      }

      ctx.clearRect(0, 0, width, height);
      if (img.complete && img.naturalHeight !== 0) {
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
      }
    };

    // Subscribe to frame number changes
    const unsubscribe = frameNumber.on('change', render);
    
    // Initial render and resize handling
    render();
    window.addEventListener('resize', render);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', render);
    };
  }, [images, frameNumber]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-slate-950">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Atmosphere Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
        
        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950 z-50">
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-primary font-headline font-bold animate-pulse">Initializing Security Protocol...</p>
            </div>
          </div>
        )}

        {/* The Animation Canvas */}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-contain pointer-events-none"
        />

        {/* Dynamic Glow Overlay */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]) }}
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_80%)] blur-3xl"
        />
      </div>

      {/* Scrollytelling Content Overlays - Adjusted for shorter sequence */}
      <div className="relative z-10">
        <SequenceSection 
          progress={scrollYProgress} 
          range={[0.1, 0.3]} 
          title="Fortified Architecture" 
          description="Engineered to withstand the most sophisticated digital incursions." 
        />
        <SequenceSection 
          progress={scrollYProgress} 
          range={[0.4, 0.6]} 
          title="Neural Response" 
          description="Real-time threat detection powered by advanced machine learning models." 
        />
        <SequenceSection 
          progress={scrollYProgress} 
          range={[0.7, 0.9]} 
          title="Global Vigilance" 
          description="Protecting digital ecosystems across every continent, 24/7." 
        />
      </div>
    </div>
  );
}

function SequenceSection({ progress, range, title, description }: { progress: any, range: [number, number], title: string, description: string }) {
  const opacity = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [40, 0, 0, -40]);

  return (
    <motion.section 
      style={{ opacity, y }}
      className="h-screen flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto"
    >
      <h2 className="font-headline text-4xl md:text-7xl font-bold text-white tracking-tighter mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        {title}
      </h2>
      <p className="text-lg md:text-2xl text-blue-400 font-medium leading-relaxed">
        {description}
      </p>
    </motion.section>
  );
}