'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldAlert, Fingerprint, Activity, GlobeLock } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const points = [
  {
    title: "Keep Your Info Safe",
    description: "Your emails, photos, and banking details live online. Good security stops hackers from stealing your private information.",
    icon: Fingerprint,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Protect Your Money",
    description: "Cyber attacks can lead to stolen funds and ruined businesses. Staying secure saves you from sudden financial disasters.",
    icon: Activity,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "Secure Your Devices",
    description: "From smart TVs to home cameras, connected devices can be hacked. Security keeps your digital and physical world safe.",
    icon: GlobeLock,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Stay One Step Ahead",
    description: "Hackers are always finding new ways to trick people. Strong cybersecurity blocks these new threats before they cause harm.",
    icon: ShieldAlert,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
];

export function WhyCybersecurityImportant() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.cyber-card');

    // Header animation
    gsap.fromTo('.cyber-header',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );

    // Cards staggered animation
    gsap.fromTo(cards,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: '.cyber-cards-container',
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-primary/5 dark:bg-primary/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cyber-header text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            Why Cybersecurity <span className="text-primary">Matters to You</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Because so much of our lives happens online, keeping our data safe is essential for everyone not just tech experts.
          </p>
        </div>

        <div className="cyber-cards-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <div
              key={index}
              className="cyber-card group relative p-8 sm:p-10 rounded-3xl bg-background border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl ${point.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <point.icon className={`w-8 h-8 ${point.color}`} />
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">{point.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
