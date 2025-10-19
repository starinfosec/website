import type React from "react"
import type { Metadata } from "next"
import { Inter, Amiri } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import WhatsAppButton from "@/components/site/whatsapp-button"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  title: "StarInfoSec — Next-Generation Cybersecurity",
  description:
    "Empowering businesses with next-generation cybersecurity solutions. Secure, modern, and trustworthy services by StarInfoSec.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "vulnerability assessment",
    "SOC",
    "cloud security",
    "StarInfoSec",
  ],
  openGraph: {
    title: "StarInfoSec — Next-Generation Cybersecurity",
    description:
      "Empowering businesses with next-generation cybersecurity solutions. Secure, modern, and trustworthy services by StarInfoSec.",
    url: "https://starinfosec.example.com",
    siteName: "StarInfoSec",
    images: [
      {
        url: "/cybersecurity-blue-grid-hero.jpg",
        width: 1200,
        height: 630,
        alt: "StarInfoSec cybersecurity hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StarInfoSec — Next-Generation Cybersecurity",
    description:
      "Empowering businesses with next-generation cybersecurity solutions. Secure, modern, and trustworthy services by StarInfoSec.",
    images: ["/cybersecurity-blue-grid-hero.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
