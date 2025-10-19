import type { Metadata } from "next"
import { GlossyCard } from "@/components/site/glossy-card"

export const metadata: Metadata = {
  title: "Vision — StarInfoSec",
  description: "Our strategic pillars and vision for the future of cybersecurity.",
}

export default function VisionPage() {
  const pillars = [
    "Cybersecurity solutions accessible to all businesses.",
    "Embedding cybersecurity into everyday business practices.",
    "Staying ahead with continuous security innovation.",
    "Creating global impact with stronger cybersecurity.",
  ]

  const future = [
    "By 2030, StarInfoSec aims to develop automated AI-driven cybersecurity solutions designed to protect and support growing businesses with advanced digital defense.",
    "We plan to provide global cybersecurity support and monitoring services to help companies stay secure, compliant, and protected from evolving online threats.",
    "Our goal is to design simple, scalable, and effective security frameworks that make cyber protection accessible for small and medium-sized businesses worldwide.",
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      {/* Vision heading centered */}
      <h1 className="heading-blue text-3xl md:text-4xl font-extrabold mb-12 text-center">
        Our Vision
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <GlossyCard className="h-full flex flex-col" title="Our Strategic Pillars" imageSrc="/pillar.GIF" alt="Strategic pillars">
          <ul className="list-disc pl-5 text-sm opacity-90 flex-1 flex flex-col justify-between">
            {pillars.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </GlossyCard>

        <GlossyCard className="h-full flex flex-col" title="Looking to the Future" imageSrc="/future.GIF" alt="Future vision">
          <ul className="list-disc pl-5 text-sm opacity-90 flex-1 flex flex-col justify-between">
            {future.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </GlossyCard>
      </div>
    </div>
  )
}

