import type { Metadata } from "next"
import { GlossyCard } from "@/components/site/glossy-card"

export const metadata: Metadata = {
  title: "Services — StarInfoSec",
  description: "Penetration Testing, Vulnerability Assessment, SOC Setup, and Cloud Security services.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Web Application Penetration Testing",
      desc: "Our web application penetration testing detects security issues like SQL Injection, XSS, CSRF, authentication flaws, access control problems, and misconfigurations before hackers can exploit them, using both tools and hands-on methods.",
      imageSrc: "/IMG_7128.GIF",
    },
    {
      title: "Cybersecurity Training",
      desc: "Our cybersecurity training helps your team learn the basics, web security, threat modeling, and incident response to build, maintain, and protect secure systems effectively.",
      imageSrc: "/P.GIF",
    },
    {
      title: "Employee Security Awareness",
      desc: "Our employee security awareness training uses interactive workshops, hands-on exercises, and safe phishing simulations to teach staff how to spot and prevent common cyber threats.",
      imageSrc: "/IMG_7127.GIF",
    },
    {
      title: "Security Consulting",
      desc: "We provide expert consulting to develop security programs, ensure compliance, and assess risks, helping your business stay safe and grow smoothly.",
      imageSrc: "/g.GIF",
    },
    {
      title: "Cybersecurity Internship",
      desc: "Join our hands-on cybersecurity internship to gain real-world experience, work on projects, collaborate with mentor, and receive certification and career guidance.",
      imageSrc: "/i.GIF",
    },
    {
      title: "Cybersecurity Courses",
      desc: "We offer practical cybersecurity courses for students, professionals, and business owners, covering beginner security, ethical hacking, web app security, and mentoring.",
      imageSrc: "/C5.GIF",
    },
  ]

  const process = [
    "We begin with consultation to understand your business security needs.",
    "We create a detailed security proposal with scope and timeline.",
    "Our team executes security plans, providing updates and key findings.",
    "We provide detailed reports with clear, prioritized security improvement recommendations.",
    "We offer ongoing support to implement recommendations and ensure security."
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h1 className="heading-blue text-3xl md:text-4xl font-extrabold mb-8 text-center">Our Services</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((s) => (
          <GlossyCard
            key={s.title}
            title={s.title}
            imageSrc={s.imageSrc}
            alt={`${s.title} illustration`}
          >
            <p className="text-sm opacity-90">{s.desc}</p>
          </GlossyCard>
        ))}
      </div>

      {/* Service process at the bottom */}
      <h2 className="heading-blue text-3xl md:text-4xl font-extrabold mb-8 text-center">Our Service Process</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {process.map((step) => (
          <div key={step} className="glass-card rounded-xl px-4 py-3 text-center font-semibold bounce-soft">
            {step}
          </div>
        ))}
      </div>
    </div>
  )
}

