import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact — StarInfoSec",
  description: "Contact us for quotes, consultations, or general cybersecurity service inquiries.",
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h1 className="heading-blue text-3xl md:text-4xl font-extrabold mb-8 text-center">Contact Us</h1>

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
              name="name"
              placeholder="Jane Doe"
              aria-label="Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              className="glass-input w-full rounded-lg px-3 py-2"
              type="email"
              name="email"
              placeholder="jane@company.com"
              aria-label="Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              className="glass-input w-full rounded-lg px-3 py-2 min-h-[140px]"
              name="message"
              placeholder="How can we help?"
              aria-label="Message"
              required
            />
          </div>
          <button type="submit" className="glass-button-primary rounded-xl py-3 font-semibold">
            Send Message
          </button>
        </form>

        {/* Image and Info */}
        <div className="glass-card rounded-2xl p-6">
          <Image
            src="/f.GIF"
            width={640}
            height={420}
            alt="Secure cybersecurity communication"
            className="rounded-xl object-cover w-full h-64"
          />
          <p className="text-sm opacity-90 mt-4 text-center">
            We typically respond within 1–2 business days. Your information is handled securely and confidentially.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone & Whatsapp</h3>
                <p className="text-gray-600">+91 8669361239</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@starinfosec.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Office</h3>
                <p className="text-gray-600">Urun-Islampur</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

