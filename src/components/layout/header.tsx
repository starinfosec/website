"use client"

import Link from "next/link"
import { Menu, X, ChevronDown, Briefcase, Star, Handshake, Newspaper, BookOpen, Compass, FileCheck, Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "../theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/industries", label: "Industries" },
]

const companyLinks = [
  { href: "/about", label: "About", description: "Learn about our mission, vision, and values.", icon: Briefcase },
  { href: "/testimonials", label: "Testimonials", description: "See what our happy clients have to say.", icon: Star },
  { href: "/partners", label: "Partners", description: "Meet the industry leaders we collaborate with.", icon: Handshake },
  { href: "/privacy-policy", label: "Privacy Policy", description: "Read about how we protect your data.", icon: Shield },
];

const resourcesLinks = [
  { href: "/blog", label: "Blog", description: "Stay updated with the latest security news.", icon: Newspaper },
  { href: "/documentation", label: "Documentation", description: "Comprehensive guides for our platform.", icon: BookOpen },
  { href: "/guides", label: "Guides", description: "Practical advice to navigate cybersecurity.", icon: Compass },
  { href: "/case-studies", label: "Case Studies", description: "Real-world examples of our impact.", icon: FileCheck },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-bold font-headline">StarInfoSec</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none">
              Company <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2">
              <div className="grid gap-1">
                {companyLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild className="p-0 cursor-pointer">
                    <Link href={link.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <link.icon className="h-4 w-4 text-primary" />
                        {link.label}
                      </div>
                      <p className="pl-6 line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {link.description}
                      </p>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none">
              Resources <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2">
              <div className="grid gap-1">
                {resourcesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild className="p-0 cursor-pointer">
                    <Link href={link.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <link.icon className="h-4 w-4 text-primary" />
                        {link.label}
                      </div>
                      <p className="pl-6 line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {link.description}
                      </p>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Contact Now</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm bg-background p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Logo className="h-8 w-8" />
                    <span className="text-lg font-bold font-headline">StarInfoSec</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </div>

                <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 text-lg font-medium hover:bg-muted" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  ))}

                  <Collapsible className="rounded-lg">
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-lg font-medium hover:bg-muted [&[data-state=open]>svg]:rotate-180">
                      Company
                      <ChevronDown className="h-5 w-5 transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-6">
                      {companyLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="block rounded-lg py-2 text-base font-medium text-muted-foreground hover:bg-muted/50" onClick={() => setIsOpen(false)}>
                          {link.label}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible className="rounded-lg">
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-lg font-medium hover:bg-muted [&[data-state=open]>svg]:rotate-180">
                      Resources
                      <ChevronDown className="h-5 w-5 transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-6">
                      {resourcesLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="block rounded-lg py-2 text-base font-medium text-muted-foreground hover:bg-muted/50" onClick={() => setIsOpen(false)}>
                          {link.label}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Link href="/contact" className="block rounded-lg px-3 py-2 text-lg font-medium hover:bg-muted" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </nav>

                <div className="mt-auto flex flex-col gap-4 border-t p-4">
                  <Button asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}