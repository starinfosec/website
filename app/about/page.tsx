import type { Metadata } from "next"
import Image from "next/image"
import { Shield, Lock, Users, Briefcase } from "lucide-react"
import { GlossyCard } from "@/components/site/glossy-card"

export const metadata: Metadata = {
  title: "About — StarInfoSec",
  description: "Learn about StarInfoSec and our commitment to modern, trustworthy cybersecurity.",
}

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust",
      desc: "We build trust with transparent processes and proven cybersecurity practices.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security First",
      desc: "We make security the foundation of every project and service we deliver.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Innovation",
      desc: "We constantly update our cybersecurity practices to protect businesses from new and evolving threats.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      desc: "We partner with our clients to solve their cybersecurity challenges and keep their systems safe.",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h1 className="heading-blue text-3xl md:text-4xl font-extrabold mb-6 text-center">About StarInfoSec</h1>

      {/* Image section */}
      <div className="flex justify-center mb-6">
        <Image
          src="/team.gif" // Replace with your image path
          alt="About StarInfoSec"
          width={400}
          height={250}
          className="rounded-xl object-cover"
        />
      </div>

      <p className="opacity-90 max-w-3xl mx-auto text-center mb-10">
        Our expert cybersecurity team helps protect small businesses and startups from hackers, data breaches, and other online threats, so you can focus on growing your business safely.
      </p>

      {/* Core Values */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v) => (
          <GlossyCard key={v.title} title={v.title}>
            <div className="mb-3">{v.icon}</div>
            <p className="text-sm opacity-90">{v.desc}</p>
          </GlossyCard>
        ))}
      </section>
    </div>
  )
}

