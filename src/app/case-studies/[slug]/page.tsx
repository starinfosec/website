'use client';

import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const caseStudiesContent: { [key: string]: { title: string, content: string } } = {
  'preventing-ransomware-financial-firm': {
    title: 'Preventing a Ransomware Attack at a Financial Firm',
    content: `
      <h2>The Challenge</h2>
      <p>A mid-sized financial services firm with 150 employees was concerned about the increasing threat of ransomware. A successful attack would not only disrupt their operations but also severely damage their reputation and violate regulatory compliance.</p>
      <h2>Our Solution</h2>
      <p>We implemented a multi-layered defense strategy. This included advanced endpoint protection, network segmentation, and a robust email filtering system. Crucially, we conducted mandatory, engaging phishing simulation and awareness training for all employees.</p>
      <h2>The Result</h2>
      <p>Three months after our engagement, an employee received a sophisticated spear-phishing email containing a link to a ransomware payload. Citing their training, the employee recognized the red flags, did not click the link, and immediately reported the email to IT using the protocol we established. Our systems blocked the malicious domain, and an analysis confirmed we had thwarted a targeted ransomware attempt. The firm avoided millions in potential damages and downtime.</p>
    `
  },
  'securing-healthcare-data': {
    title: "Securing a Healthcare Provider's Patient Data",
    content: `
      <h2>The Challenge</h2>
      <p>A regional healthcare provider needed to ensure the security of their electronic health records (EHR) to comply with HIPAA regulations. Their existing infrastructure had several potential vulnerabilities and lacked comprehensive access controls.</p>
      <h2>Our Solution</h2>
      <p>Our team performed a thorough security assessment and penetration test, identifying critical vulnerabilities. We worked with their IT team to implement a zero-trust architecture, enforcing strict access controls based on the principle of least privilege. We also deployed a system for continuous monitoring and alerting for any unauthorized access attempts.</p>
      <h2>The Result</h2>
      <p>The healthcare provider successfully passed their HIPAA audit. Unauthorized access attempts dropped by 95%, and the provider had a clear, auditable trail of all access to patient data. This enhanced security posture not only ensured compliance but also increased patient trust.</p>
    `
  },
  'ecommerce-breach-recovery': {
    title: 'E-commerce Breach Recovery and Fortification',
    content: `
      <h2>The Challenge</h2>
      <p>A popular online retailer suffered a data breach where customer names, addresses, and credit card information were compromised. They were facing significant financial losses, customer exodus, and brand damage.</p>
      <h2>Our Solution</h2>
      <p>Our incident response team was deployed immediately to contain the breach and eradicate the attacker's presence. We conducted a full forensic investigation to determine the root cause—an unpatched vulnerability in their e-commerce platform. Post-containment, we helped them rebuild their platform on a secure foundation, implement a Web Application Firewall (WAF), and establish a routine vulnerability management program.</p>
      <h2>The Result</h2>
      <p>While the initial breach was costly, our swift response and transparent communication strategy helped the retailer retain a significant portion of their customer base. The fortified platform has since resisted multiple attack attempts, and the company has rebuilt its reputation as a secure place to shop online.</p>
    `
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudiesContent[slug];

  if (!study) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Case Study not found</h1>
            <p className="mt-4 text-muted-foreground">The case study you are looking for does not exist.</p>
            <Button asChild className="mt-8">
              <Link href="/case-studies">
                Back to Case Studies
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <article className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="animate-in fade-in slide-in-from-top-16 duration-700">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {study.title}
              </h1>
            </div>
            
            <div 
              className="prose mt-12 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-200 dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: study.content }}
            />
             <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-16 duration-700 delay-400">
                <Button asChild size="lg">
                    <Link href="/case-studies">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Case Studies
                    </Link>
                </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
