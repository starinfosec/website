
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Get in Touch
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
                We're here to help you with any questions about our services. Reach out to us and we'll respond as soon as we can.
              </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
            <Card className="flex flex-col animate-in fade-in zoom-in-95 duration-700 delay-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="font-headline text-2xl sm:text-3xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="https://formspree.io/f/mgvkqegg" method="POST" className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Number</Label>
                    <Input id="phone" type="tel" name="phone" placeholder="Enter your contact number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8 animate-in fade-in slide-in-from-right-16 duration-700 delay-400">
                <div className="flex items-start gap-6">
                    <div className="rounded-full bg-primary/10 p-4">
                        <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold">Email Us</h3>
                        <p className="mt-1 text-muted-foreground">For general inquiries and support.</p>
                        <a href="mailto:contact@starinfosec.com" className="mt-2 inline-block font-medium text-primary hover:underline">contact@starinfosec.com</a>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="rounded-full bg-primary/10 p-4">
                        <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold">Call Us</h3>
                        <p className="mt-1 text-muted-foreground">Mon-Fri from 9am to 5pm.</p>
                        <a href="tel:+918669361239" className="mt-2 inline-block font-medium text-primary hover:underline">+91 86693 61239</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
