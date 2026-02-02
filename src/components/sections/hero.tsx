"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react"

const statsData = [
  { value: 20, suffix: "+", label: "Projects Secured" },
  { value: 50, suffix: "+", label: "Students Trained" },
  { value: 10, suffix: "+", label: "Industries Protected" },
  { value: 5, suffix: "+", label: "Security Experts" },
];

function CountUp({ end, duration = 2000 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Power 2 out easing
      const easedPercentage = 1 - Math.pow(1 - percentage, 2);
      const nextCount = Math.floor(easedPercentage * end);

      if (nextCount !== countRef.current) {
        countRef.current = nextCount;
        setCount(nextCount);
      }

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <>{count}</>;
}

export function Hero() {
  const heroData = PlaceHolderImages.find(img => img.id === 'hero-background');
  
  // Ensure the image path is always correctly formatted for the public folder
  const rawUrl = heroData?.imageUrl || "/hero-background.png";
  const finalSrc = rawUrl.startsWith('http') || rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`;

  return (
    <section className="relative pt-32 pb-28 md:pt-40 md:pb-36 lg:pt-48 lg:pb-40 overflow-hidden min-h-[95vh] flex items-center justify-center bg-black">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={finalSrc}
            alt="StarInfoSec Cybersecurity Background"
            fill
            className="object-cover animate-hero-zoom opacity-70"
            priority
            quality={100}
          />
          {/* Overlays for depth and text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="space-y-6">
              <h1 className={cn(
                "font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl flex flex-col items-center gap-2 sm:gap-4",
                "animate-in fade-in slide-in-from-top-12 duration-1000 ease-out"
              )}>
                <span>Protecting Your <span className="text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Digital Assets,</span></span>
                <span>Securing Your Future</span>
              </h1>
              <p className={cn(
                "mt-8 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-white/90 font-medium leading-relaxed",
                "animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 ease-out"
              )}>
                StarInfosec delivers comprehensive cybersecurity services and training programs to safeguard your organization against evolving cyber threats.
              </p>
            </div>
            
            <div className={cn(
              "mt-12 flex flex-wrap items-center justify-center gap-6",
              "animate-in fade-in zoom-in-90 duration-1000 delay-500 ease-out"
            )}>
                <Button size="lg" asChild className="h-14 px-10 text-lg shadow-2xl hover:scale-105 transition-all bg-primary text-white hover:bg-primary/90">
                    <Link href="/services">
                        Explore Services
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                </Button>
                
                {/* Theme-independent styling for Contact Now button */}
                <Button 
                  size="lg" 
                  asChild 
                  className={cn(
                    "h-14 px-10 text-lg transition-all hover:scale-105 shadow-xl border-2 backdrop-blur-md",
                    "border-white/60 text-white bg-white/5 hover:bg-white/20 hover:text-white hover:border-white"
                  )}
                >
                    <Link href="/contact">
                        Contact Now
                    </Link>
                </Button>
            </div>

            <div className={cn(
              "mt-24 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 max-w-4xl mx-auto",
              "animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 ease-out"
            )}>
                {statsData.map((stat, index) => (
                    <div 
                      key={stat.label} 
                      className="group relative flex flex-col items-center"
                      style={{ animationDelay: `${700 + (index * 100)}ms` }}
                    >
                      <div className="absolute -inset-4 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                      <div className="relative text-center transition-all">
                        <p className="font-headline text-4xl font-bold text-primary sm:text-5xl">
                            <CountUp end={stat.value} />{stat.suffix}
                        </p>
                        <p className="mt-2 text-xs font-bold text-white/70 uppercase tracking-widest sm:text-sm">
                            {stat.label}
                        </p>
                      </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
    </section>
  )
}
