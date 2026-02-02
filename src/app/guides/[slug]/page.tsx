'use client';

import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Placeholder content, in a real app this would come from a CMS or markdown files
const guidesContent: { [key: string]: { title: string, content: string } } = {
  'smb-cybersecurity-checklist': {
    title: 'SMB Cybersecurity Checklist',
    content: `
      <p>Protecting your small or medium-sized business is critical. Follow this checklist to cover your bases.</p>
      <h2>1. Employee Training</h2>
      <p>Your team is your first line of defense. Conduct regular security awareness training on phishing, password security, and safe browsing habits.</p>
      <h2>2. Strong Password Policies</h2>
      <p>Enforce the use of strong, unique passwords for all accounts. Implement multi-factor authentication (MFA) wherever possible, especially for email and financial systems.</p>
      <h2>3. Regular Backups</h2>
      <p>Regularly back up all critical data. Ensure backups are stored offline or in a separate, secure location to protect them from ransomware.</p>
      <h2>4. Patch Management</h2>
      <p>Keep all software, including operating systems and applications, up to date with the latest security patches to close known vulnerabilities.</p>
      <h2>5. Network Security</h2>
      <p>Use a firewall to protect your network perimeter. Secure your Wi-Fi network with a strong password and WPA2/WPA3 encryption.</p>
    `
  },
  'incident-response-planning': {
    title: 'Incident Response Planning',
    content: `
      <p>When a breach occurs, having a plan is the difference between controlled recovery and chaos.</p>
      <h2>1. Preparation</h2>
      <p>Identify your incident response team and their roles. Create communication plans for internal and external stakeholders.</p>
      <h2>2. Identification</h2>
      <p>Define how you will detect and validate a security incident. Monitor logs and security alerts for suspicious activity.</p>
      <h2>3. Containment</h2>
      <p>Isolate affected systems from the network to prevent the threat from spreading. Preserve evidence for forensic analysis.</p>
      <h2>4. Eradication & Recovery</h2>
      <p>Remove the threat from your systems. Restore from clean backups to bring systems back online securely.</p>
      <h2>5. Post-Incident Analysis</h2>
      <p>Conduct a "lessons learned" session. Analyze the incident and improve your security controls and response plan to prevent future occurrences.</p>
    `
  },
  'secure-remote-work-guide': {
    title: 'Secure Remote Work Guide',
    content: `
      <p>The modern workforce is distributed. Securing it requires a modern approach.</p>
      <h2>1. Use a VPN</h2>
      <p>Require all employees to connect to the company network through a Virtual Private Network (VPN) to encrypt traffic and secure the connection.</p>
      <h2>2. Secure Home Networks</h2>
      <p>Educate employees on securing their home Wi-Fi networks by changing default router passwords and enabling WPA2/WPA3 encryption.</p>
      <h2>3. Endpoint Security</h2>
      <p>Install and maintain antivirus and anti-malware software on all company devices used for remote work. Ensure devices are encrypted.</p>
      <h2>4. Multi-Factor Authentication (MFA)</h2>
      <p>MFA is a must for all remote access to corporate resources, including email, cloud applications, and VPNs.</p>
      <h2>5. Clear Policies</h2>
      <p>Establish clear policies for remote work, including acceptable use of company devices and data handling procedures.</p>
    `
  }
};

export default function GuidePage() {
  const params = useParams();
  const slug = params.slug as string;
  const guide = guidesContent[slug];

  if (!guide) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Guide not found</h1>
            <p className="mt-4 text-muted-foreground">The guide you are looking for does not exist.</p>
            <Button asChild className="mt-8">
              <Link href="/guides">
                Back to Guides
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
                {guide.title}
              </h1>
            </div>
            
            <div 
              className="prose mt-12 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-200 dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
             <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-16 duration-700 delay-400">
                <Button asChild size="lg">
                    <Link href="/guides">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Guides
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
