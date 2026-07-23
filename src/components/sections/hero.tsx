'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const START_FRAME = 1;
const END_FRAME = 81;
const FRAME_PATH = '/frames/';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const frameNumber = useTransform(smoothProgress, [0, 1], [START_FRAME, END_FRAME]);

  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = START_FRAME; i <= END_FRAME; i++) {
        const img = new Image();
        img.src = `${FRAME_PATH}${i}.png`;
        img.onload = () => {
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / END_FRAME) * 100));
          if (loadedCount === END_FRAME) {
            setImages(loadedImages);
            setIsLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === END_FRAME) {
            setImages(loadedImages);
            setIsLoaded(true);
          }
        };
        loadedImages.push(img);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx || images.length === 0) return;

      const currentFrameNum = Math.floor(frameNumber.get());
      const index = Math.max(0, Math.min(images.length - 1, currentFrameNum - START_FRAME));
      const img = images[index];
      if (!img) return;

      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const imgRatio = img.width / img.height;
      const canvasRatio = width / height;

      let drawWidth, drawHeight, x, y;

      if (canvasRatio > imgRatio) {
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

    const unsubscribe = frameNumber.on('change', render);
    render();

    const handleResize = () => render();
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [images, frameNumber]);

  const mainTextOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const mainTextY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  const bgDimOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 0.9]);

  return (
    // Forced dark background for Hero section to maintain consistent aesthetic
    <div ref={containerRef} className="relative h-[600vh] w-full bg-[#020617] overflow-clip">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Deep Atmosphere Background - Forced dark/blue glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0%,transparent_75%)]" />

        {/* Loading Overlay - Forced Dark */}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#020617] z-[60]">
            <div className="relative h-16 w-16 mb-6">
              <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
            <p className="text-primary font-headline font-bold text-lg tracking-widest uppercase animate-pulse">Initializing Security...</p>
            <p className="text-slate-400 font-mono text-sm mt-2">{loadProgress}%</p>
          </div>
        )}

        {/* The Animation Canvas */}
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
            style={{ opacity: isLoaded ? 0.9 : 0 }}
          />
          {/* Dim overlay to ensure text contrast - Forced Dark */}
          <motion.div
            style={{ opacity: bgDimOpacity }}
            className="absolute inset-0 bg-black/60 pointer-events-none"
          />
        </div>

        {/* Hero Content - Forced Light text on Dark background */}
        <motion.div
          style={{ opacity: mainTextOpacity, y: mainTextY }}
          className="relative z-20 flex flex-col items-center justify-center text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-blue-200 text-sm font-bold mb-8 backdrop-blur-md shadow-2xl">
            <ShieldCheck className="h-4 w-4" />
            Next-Gen Protection
          </div>

          <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            StarInfoSec <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Cybersecurity Made Simple
            </span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-2xl text-slate-200 font-medium mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Protecting your digital assets with advanced threat detection and expert security consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild className="h-14 px-8 text-lg rounded-xl shadow-lg hover:scale-105 transition-transform bg-primary hover:bg-primary/90 text-white">
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-14 px-8 text-lg rounded-xl border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-transform hover:scale-105">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-14 px-8 text-lg rounded-xl border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-transform hover:scale-105">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Star className="mr-2 h-5 w-5 text-yellow-400 fill-yellow-400" />
                Google Reviews
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Scrollytelling Content Overlays - Forced Dark Mode Style */}
        <div className="absolute inset-0 pointer-events-none z-30">
          <HeroSequenceSection
            progress={scrollYProgress}
            range={[0.15, 0.35]}
            title="Why Security Matters ?"
            description="Cyber attacks can steal data and money."
          />
          <HeroSequenceSection
            progress={scrollYProgress}
            range={[0.45, 0.65]}
            title="Business Protection"
            description="Safeguards operations and reputation."
          />
          <HeroSequenceSection
            progress={scrollYProgress}
            range={[0.75, 0.95]}
            title="Digital Safety"
            description="Security protects your online work."
          />
        </div>
      </div>
    </div>
  );
}

function HeroSequenceSection({ progress, range, title, description }: { progress: any, range: [number, number], title: string, description: string }) {
  const opacity = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [40, 0, 0, -40]);

  return (
    <motion.section
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto"
    >
      <h2 className="font-headline text-4xl md:text-7xl font-bold text-white tracking-tighter mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        {title}
      </h2>
      <p className="text-xl md:text-3xl text-blue-400 font-bold leading-relaxed bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-primary/20">
        {description}
      </p>
    </motion.section>
  );
}
