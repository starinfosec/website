
import { Logo } from "@/components/logo"
import { Instagram, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  Services: [
    { title: "Cybersecurity Consultation", href: "/services/cybersecurity-consultation" },
    { title: "Employee Security Training", href: "/services/employee-security-training" },
    { title: "Website Security & Hardening", href: "/services/website-security-hardening" },
    { title: "Cybersecurity Workshops", href: "/services/cybersecurity-workshops" },
    { title: "Internship + Courses", href: "/services/internship-courses" },
  ],
  Resources: [
    { title: "Documentation", href: "/documentation" },
    { title: "Blog", href: "/blog" },
    { title: "Guides", href: "/guides" },
    { title: "Case Studies", href: "/case-studies" },
  ],
  Showcase: [
    { title: "Portfolio", href: "/portfolio" },
    { title: "Testimonials", href: "/testimonials" },
    { title: "Partners", href: "/partners" },
  ],
  Company: [
    { title: "About", href: "/about" },
    { title: "Careers", href: "#" },
    { title: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-bold font-headline">StarInfoSec</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your partner in digital security.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-headline font-semibold text-foreground">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StarInfoSec, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="https://www.instagram.com/starinfosec" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Instagram className="h-5 w-5" /></a>
            <a href="https://www.facebook.com/share/1AssJrz1nG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Facebook className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/company/starinfosec0/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
