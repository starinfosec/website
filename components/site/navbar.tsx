"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const lastYRef = useRef(0)
  const tickingRef = useRef(false)

  // Detect mobile/tablet screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  // Hide navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (tickingRef.current) return
      tickingRef.current = true

      window.requestAnimationFrame(() => {
        const last = lastYRef.current
        const shouldHide = y > last && y > 24
        setHidden(shouldHide)
        lastYRef.current = y
        tickingRef.current = false

        if (shouldHide && open) setOpen(false)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [open])

  // Close mobile menu on navigation
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Mission", href: "/mission" },
    { label: "Vision", href: "/vision" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
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
        <div className="glass-card rounded-2xl px-6 py-4">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="StarInfoSec logo"
                width={50}
                height={50}
                className="rounded-sm"
              />
              <span className="text-xl font-bold text-primary">StarInfoSec</span>
            </Link>

            {/* Desktop & Tablet links */}
            <div className="hidden md:flex flex-wrap items-center gap-1 lg:gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link text-sm font-medium hover:text-primary-foreground whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}

              {/* Dark mode toggle for desktop */}
              <ThemeToggle disableToggle={false} />
            </div>

            {/* Mobile menu & dark mode */}
            <div className="md:hidden flex items-center gap-2 mt-2 md:mt-0">
              <button
                aria-label="Toggle dark mode"
                onClick={() => setIsDark((v) => !v)}
                className="glass-button p-2 rounded-lg"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="glass-button p-2 rounded-lg"
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "nav-link text-left text-sm py-2 rounded-lg hover:bg-white/10 transition-colors"
                    )}
                  >
                    {item.label}
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

