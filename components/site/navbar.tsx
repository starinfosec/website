"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Hide navbar on scroll down, show on scroll up, close mobile menu
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastY + 5
      const scrollingUp = currentY < lastY - 5

      if (scrollingDown && currentY > 80) setHidden(true)
      if (scrollingUp) setHidden(false)

      // Close mobile menu on scroll
      if (open && isMobile) setOpen(false)

      lastY = currentY
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [open, isMobile])

  // Close mobile menu on navigation
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/mission", label: "Mission" },
    { href: "/vision", label: "Vision" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={false}
      animate={{ y: hidden ? -90 : 0, opacity: hidden ? 0.98 : 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto p-3">
        <div className="glass-card rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="StarInfoSec logo"
                width={60}
                height={60}
                className="rounded-md"
                priority
              />
              <span className="font-extrabold text-lg text-primary-foreground heading-blue">
                StarInfoSec
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="nav-link text-sm font-medium hover:text-primary-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Theme toggle + mobile menu button */}
            <div className="flex items-center gap-2">
              {/* ThemeToggle visible on all screens, disabled on mobile */}
              <ThemeToggle disableToggle={isMobile} />

              <button
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((s) => !s)}
                className="md:hidden glass-button p-2 rounded-lg"
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden mt-3 pt-3 border-t border-white/15">
              <div className="grid gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="nav-link text-sm py-2 rounded-lg"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

