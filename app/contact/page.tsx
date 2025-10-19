import type { Metadata } from "next"
import Image from "next/image"
import { GlossyCard } from "@/components/site/glossy-card"
import { Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact — StarInfoSec",
  description: "Get in touch for assessments, audits, and security advisory.",
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h1 className="heading-blue text-3xl md:text-4xl font-extrabold mb-8 text-center">
        Contact Us
      </h1>

      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        {/* Contact Form using Formspree */}
        <form
          action="https://formspree.io/f/mgvkqegg"
          method="POST"
          className="glass-card rounded-2xl p-6 grid gap-4"
        >
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              className="glass-input w-full rounded-lg px-3 py-2"
              placeholder="Jane Doe"
              name="name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              className="glass-input w-full rounded-lg px-3 py-2"
              type="email"
              placeholder="jane@company.com"
              name="email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              className="glass-input w-full rounded-lg px-3 py-2 min-h-[140px]"
              placeholder="How can we help?"
              name="message"
              required
            />
          </div>

          <button
            type="submit"
            className="glass-button-primary rounded-xl py-3 font-semibold transition hover:opacity-90"
          >
            Send Message
          </button>
        </form>

        <div className="glass-card rounded-2xl p-6">
          <Image
            src="/f.GIF"
            width={640}
            height={420}
            alt="Secure cybersecurity communication"
            className="rounded-xl object-cover w-full h-64"
          />
          <p className="text-sm opacity-90 mt-4">
            We usually reply within 1–2 business days. Your details are kept safe, private, and fully protected.
          </p>
        </div>
      </div>

      <section className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold heading-blue mb-12 text-center">
          Get In Touch
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <GlossyCard title="Phone & WhatsApp" description="+91 8669361239">
            <div className="flex justify-center">
              <Phone className="h-8 w-8 text-blue-500" />
            </div>
          </GlossyCard>

          <GlossyCard title="Email" description="contact@starinfosec.com">
            <div className="flex justify-center">
              <Mail className="h-8 w-8 text-blue-500" />
            </div>
          </GlossyCard>

          <GlossyCard title="Office" description="Urun-Islampur">
            <div className="flex justify-center">
              <MapPin className="h-8 w-8 text-blue-500" />
            </div>
          </GlossyCard>
        </div>
      </section>
    </div>
  )
}

