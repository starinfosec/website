"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { GlossyCard } from "@/components/site/glossy-card"

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[78vh] flex items-center">
        <Image
          src="/IMG_6524.GIF"
          alt="Cybersecurity blue network grid background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-pretty font-extrabold text-4xl md:text-6xl heading-blue text-center"
          >
            Secure Your Business with Modern Cybersecurity Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg opacity-90 mx-auto text-center"
          >
            Keep your business safe from online threats with StarInfoSec’s cybersecurity services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services" className="glass-button-primary px-6 py-4 rounded-xl text-center font-semibold">
              Explore Our Services
            </Link>
            <Link href="/contact" className="glass-button px-6 py-4 rounded-xl text-center font-semibold">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      
      {/* Three glossy cards */}
<section className="py-16 px-4">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    <GlossyCard
      title="Penetration Testing Benefits"
      imageSrc="/benefits.GIF"
      alt="Penetration testing visual"
      className="h-full"
    >
      <ul className="list-disc pl-5 text-base opacity-90 space-y-2">
        <li>Spot potential security problems before hackers can take advantage of them.</li>
        <li>Show your customers that their data and privacy are safe with you.</li>
        <li>Improve your overall protection with easy-to-follow security advice.</li>
        <li>Keep sensitive information safe and avoid costly breaches.</li>
        <li>Get simple reports with steps to fix any issues quickly.</li>
      </ul>
    </GlossyCard>

    <GlossyCard
      title="Our Testing Methodologies"
      imageSrc="/method.GIF"
      alt="Testing methodologies"
      className="h-full"
    >
      <ul className="list-disc pl-5 text-base opacity-90 space-y-2">
        <li><strong>White Box Testing:</strong> Testers know the system well, check every part carefully, and find weak spots inside.</li>
        <li><strong>Gray Box Testing:</strong> Testers know some details, test with normal user access, and discover issues quickly.</li>
        <li><strong>Black Box Testing:</strong> Testers know nothing about the system, simulate real hacker attacks, and focus on external weaknesses.</li>
      </ul>
    </GlossyCard>
    
    <GlossyCard
      title="What Our Clients Say"
      imageSrc="/client.GIF"
      alt="Client testimonials"
      className="h-full"
    >
      <ul className="list-disc pl-5 text-base opacity-90 space-y-2">
        <li>"StarInfoSec helped us feel confident about our security."</li>
        <li>"Their testing and guidance improved our security posture dramatically."</li>
        <li>"The team provided clear, actionable recommendations that were easy to follow."</li>
        <li>"They were always available to answer our questions and solve issues quickly."</li>
        <li>"Working with StarInfoSec made us feel our data and systems are safe."</li>
      </ul>
    </GlossyCard>
  </div>
 </section>
    </div>
  )
}
