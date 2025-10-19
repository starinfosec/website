import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/mission", label: "Mission" },
    { href: "/vision", label: "Vision" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and tagline */}
            <div className="flex items-center gap-3">
              <Image src="logo.png" alt="StarInfoSec logo" width={50} height={50} className="rounded-md" />
              <div>
                <p className="font-extrabold heading-blue">StarInfoSec</p>
                <p className="text-xs opacity-80">Expert penetration testing and cybersecurity services to protect all types of businesses and organizations securely.</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 heading-blue">Quick Links</h4>
              <ul className="grid gap-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link className="hover:text-primary-foreground transition-colors text-sm" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="font-semibold mb-3 heading-blue">Services</h4>
              <ul className="grid gap-2 text-sm">
                <li>
                  <Link href="/services#webapp" className="hover:text-primary-foreground transition-colors">
                    WebApp Penetration Testing
                  </Link>
                </li>
                <li>
                  <Link href="/services#training" className="hover:text-primary-foreground transition-colors">
                    Cybersecurity Training
                  </Link>
                </li>
                <li>
                  <Link href="/services#employee" className="hover:text-primary-foreground transition-colors">
                    Employee Awareness Programs
                  </Link>
                </li>
                <li>
                  <Link href="/services#consulting" className="hover:text-primary-foreground transition-colors">
                    Security Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services#support" className="hover:text-primary-foreground transition-colors">
                    Cybersecurity Internship + Courses
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-semibold mb-3 heading-blue">Follow</h4>
              <div className="flex items-center gap-3">
                <a
                  aria-label="LinkedIn"
                  className="glass-button p-2 rounded-lg inline-flex bounce-soft"
                  href="https://www.linkedin.com/company/starinfosec0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  aria-label="Instagram"
                  className="glass-button p-2 rounded-lg inline-flex bounce-soft"
                  href="https://www.instagram.com/starinfosec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm opacity-80">
            © {new Date().getFullYear()} StarInfoSec. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

