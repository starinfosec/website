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
      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-100">The Challenge</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-200">A mid-sized financial firm with 150 employees faced an increasing threat of ransomware.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-300">Operations were at high risk of disruption.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-400">Potential severe damage to reputation and violation of regulatory compliance.</li>
      </ul>
      
      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-500 mt-8">Our Solution</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[600ms]">Implemented a multi-layered defense strategy.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[700ms]">Deployed advanced endpoint protection and network segmentation.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[800ms]">Configured a robust email filtering system.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[900ms]">Conducted mandatory, engaging phishing simulation and awareness training for all employees.</li>
      </ul>

      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-[1000ms] mt-8">The Result</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1100ms]">An employee recognized a sophisticated spear-phishing ransomware payload thanks to our training.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1200ms]">The malicious email was reported immediately using established protocols.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1300ms]">Our systems successfully blocked the malicious domain.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1400ms]">The firm avoided millions in potential damages and zero downtime.</li>
      </ul>
    `
  },
  'securing-healthcare-data': {
    title: "Securing a Healthcare Provider's Patient Data",
    content: `
      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-100">The Challenge</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-200">A regional healthcare provider needed to secure electronic health records (EHR).</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-300">Mandatory HIPAA compliance was at risk.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-400">Existing infrastructure had several vulnerabilities and lacked access controls.</li>
      </ul>
      
      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-500 mt-8">Our Solution</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[600ms]">Performed a thorough security assessment and penetration test.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[700ms]">Identified and patched critical vulnerabilities in the network.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[800ms]">Implemented a zero-trust architecture with strict access controls.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[900ms]">Deployed continuous monitoring and alerting for unauthorized access attempts.</li>
      </ul>

      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-[1000ms] mt-8">The Result</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1100ms]">The healthcare provider successfully passed their HIPAA audit.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1200ms]">Unauthorized access attempts dropped by a massive 95%.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1300ms]">Established a clear, auditable trail of all access to patient data.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1400ms]">Patient trust and overall security posture significantly increased.</li>
      </ul>
    `
  },
  'ecommerce-breach-recovery': {
    title: 'E-commerce Breach Recovery and Fortification',
    content: `
      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-100">The Challenge</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-200">A popular online retailer suffered a severe data breach.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-300">Customer names, addresses, and credit card info were compromised.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-400">Faced significant financial losses, customer exodus, and brand damage.</li>
      </ul>
      
      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-500 mt-8">Our Solution</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[600ms]">Deployed an incident response team immediately to contain the breach.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[700ms]">Conducted a full forensic investigation to find the unpatched vulnerability.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[800ms]">Rebuilt their platform on a secure foundation post-containment.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[900ms]">Implemented a Web Application Firewall (WAF) and routine vulnerability management.</li>
      </ul>

      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-[1000ms] mt-8">The Result</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1100ms]">Our swift response and transparent communication strategy retained a major portion of the customer base.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1200ms]">The fortified platform successfully resisted multiple subsequent attack attempts.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1300ms]">The company rebuilt its reputation as a highly secure place to shop online.</li>
      </ul>
    `
  },
  'empowering-dev-teams-workshops': {
    title: 'Empowering Development Teams with Hands-On Workshops',
    content: `
      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-100">The Challenge</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-200">A rapidly growing SaaS company struggled with recurring security vulnerabilities in their codebase.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-300">Their development team lacked hands-on experience with secure coding practices.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-400">Time-to-market was severely impacted by constant security re-work and QA delays.</li>
      </ul>
      
      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-500 mt-8">Our Solution</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[600ms]">Designed a series of intensive, interactive Cybersecurity Workshops tailored to their tech stack.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[700ms]">Simulated real-world attacks to demonstrate how vulnerabilities are exploited.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[800ms]">Provided hands-on labs where developers actively patched vulnerable applications.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[900ms]">Integrated automated security scanning directly into their CI/CD pipeline as part of the training.</li>
      </ul>

      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-[1000ms] mt-8">The Result</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1100ms]">Critical vulnerabilities introduced during development dropped by 80%.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1200ms]">Development cycles sped up significantly as security QA failures became rare.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1300ms]">The team fostered a "security-first" culture, proactively defending the product.</li>
      </ul>
    `
  },
  'cultivating-next-gen-talent': {
    title: 'Cultivating Next-Gen Talent via Internship Programs',
    content: `
      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-100">The Challenge</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-200">A large regional enterprise was facing a severe shortage of qualified cybersecurity talent.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-300">Junior hires lacked practical, hands-on experience with modern security infrastructure.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-400">Recruitment costs were skyrocketing while team expansion stagnated.</li>
      </ul>
      
      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-500 mt-8">Our Solution</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[600ms]">Launched a specialized "Internship + Courses" initiative customized to the enterprise's exact needs.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[700ms]">Sourced top university talent and put them through rigorous, practical training modules.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[800ms]">Mentored interns through simulated real-world cyber incidents (Red Team / Blue Team exercises).</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[900ms]">Graduated candidates directly into junior security analyst roles at the enterprise.</li>
      </ul>

      <h2 class="animate-in fade-in slide-in-from-left duration-700 delay-[1000ms] mt-8">The Result</h2>
      <ul class="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1100ms]">The enterprise successfully onboarded a cohort of highly capable, pre-trained security analysts.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1200ms]">New hires became productive in weeks rather than months.</li>
        <li class="animate-in fade-in slide-in-from-bottom duration-700 delay-[1300ms]">Significantly reduced external recruitment costs and closed the internal skills gap.</li>
      </ul>
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
