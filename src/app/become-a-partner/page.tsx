'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MessageCircle, ShieldCheck, Lock, Target } from 'lucide-react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';

const steps = [
  "Fill in the form.",
  "Check your email and choose the best time slot to have a call with us.",
  "Join the call on the link you will receive via email.",
  "We will discuss all the benefits and clarify your expectations.",
  "If there is potential partnership for both of us, we will collaborate together.",
  "You will get your first certification within 7 days and can offer StarInfoSec services to your customers."
];

const serviceBenefits = [
  {
    title: "Cybersecurity Consultation",
    description: "Provide your clients with top-tier security audits and strategic roadmaps.",
    icon: Target,
  },
  {
    title: "Website Security & Hardening",
    description: "Equip your network with robust defenses against modern cyber threats.",
    icon: ShieldCheck,
  },
  {
    title: "Employee Security Training",
    description: "Offer comprehensive awareness programs to prevent phishing and social engineering.",
    icon: Lock,
  },
];

export default function BecomeAPartnerPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { checkPartnerRateLimit } = await import('@/app/actions/partner');
      const rateLimitRes = await checkPartnerRateLimit();
      
      if (!rateLimitRes.success) {
        toast({
          title: "Error",
          description: rateLimitRes.error || "Too many requests. Please try again later.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData(e.currentTarget);
      const firstName = formData.get('firstName');
      const lastName = formData.get('lastName');
      const companyName = formData.get('companyName');
      const website = formData.get('website');
      const country = formData.get('country');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const targetMarket = formData.get('targetMarket');
      const employees = formData.get('employees');
      const reason = formData.get('reason');

      const message = `*New Partner Application*\n\n` +
        `*Name:* ${firstName} ${lastName}\n` +
        `*Company:* ${companyName}\n` +
        `*Website:* ${website || 'N/A'}\n` +
        `*Country:* ${country}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone}\n` +
        `*Target Market:* ${targetMarket || 'N/A'}\n` +
        `*Employees:* ${employees || 'N/A'}\n` +
        `*Reason:* ${reason || 'N/A'}`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/918669361239?text=${encodedMessage}`, '_blank');
      
      toast({
        title: "Redirecting to WhatsApp...",
        description: "Please send the pre-filled message to complete your application.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-top-16 duration-700">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Grow your Business with StarInfoSec: <span className="text-primary">Become a Partner</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Join forces with us to deliver industry-leading cybersecurity solutions. Expand your portfolio, increase your revenue, and help organizations secure their digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="#apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#128C7E] hover:text-white border-transparent">
                <a href="https://wa.me/918669361239" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Process & Benefits */}
            <div className="space-y-16 animate-in fade-in slide-in-from-left-16 duration-700 delay-300">
              
              {/* Process */}
              <div>
                <h2 className="font-headline text-3xl font-bold mb-6">Schedule a call with us to discover all the benefits</h2>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-lg text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Integration Benefits */}
              <div>
                <h2 className="font-headline text-2xl font-bold mb-6">Why Partner with Us?</h2>
                <div className="grid gap-6">
                  {serviceBenefits.map((benefit, index) => (
                    <Card key={index} className="bg-muted/30 border-border/50">
                      <CardContent className="p-6 flex gap-4">
                        <div className="flex-shrink-0">
                          <benefit.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Application Form */}
            <div id="apply" className="animate-in fade-in slide-in-from-right-16 duration-700 delay-500">
              <Card className="border-border/50 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                <CardContent className="p-8 sm:p-10">
                  <h2 className="font-headline text-2xl font-bold mb-8">Partner Application Form</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name*</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name*</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name*</Label>
                      <Input id="companyName" name="companyName" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Company Website</Label>
                      <Input id="website" name="website" type="url" placeholder="https://" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country*</Label>
                      <Input id="country" name="country" required />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email*</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone*</Label>
                        <Input id="phone" name="phone" type="tel" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="targetMarket">What is your target market?</Label>
                      <Input id="targetMarket" name="targetMarket" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of employees</Label>
                      <Input id="employees" name="employees" type="number" min="1" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Why do you wish to become a StarInfoSec partner?</Label>
                      <Textarea id="reason" name="reason" rows={4} />
                    </div>

                    <Button type="submit" className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] border-transparent" size="lg" disabled={isSubmitting}>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Processing..." : "Send to WhatsApp"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      StarInfoSec uses your information to provide the content you requested and to share product updates. Unsubscribe anytime. <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Notice</Link>.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
