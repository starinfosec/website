import type { Metadata } from "next"
import { GlossyCard } from "@/components/site/glossy-card"

export const metadata: Metadata = {
  title: "Mission — StarInfoSec",
  description: "Our mission and how we fulfill it through disciplined, proactive security work.",
}

export default function MissionPage() {
  const objectives = [
    "Protecting business data, reputation, and customer trust.",
    "Educating businesses to spot and prevent security threats.",
    "Innovating to keep clients safe from cyber risks",
    "Collaborating with clients as trusted cybersecurity partners.",
  ]

  const fulfill = [
    "We perform deep security testing to protect websites and business data",
    "We train all employees on simple steps to stay cyber safe.",
    "We offer expert security consulting to strengthen your business protection.",
    "We provide continuous protection support to keep systems safe every day.",
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      {/* Mission heading centered */}
      <h1 className="heading-blue text-3xl md:text-4xl font-extrabold mb-12 text-center">
        Our Mission
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <GlossyCard title="Our Core Objectives" imageSrc="/obj.GIF" alt="Mission objectives">
          <ul className="list-disc pl-5 text-sm opacity-90">
            {objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </GlossyCard>

        <GlossyCard title="How We Fulfill Our Mission" imageSrc="/mission.GIF" alt="Fulfillment approach">
          <ul className="list-disc pl-5 text-sm opacity-90">
            {fulfill.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </GlossyCard>
      </div>
    </div>
  )
}

