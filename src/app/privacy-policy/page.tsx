import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="animate-in fade-in slide-in-from-top-8 duration-700">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="mt-12 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <section className="space-y-4">
              <h2 className="font-headline text-2xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At StarInfoSec, we take your privacy as seriously as we take your cybersecurity. This Privacy Policy outlines how we collect, use, protect, and handle your personal information when you use our website or engage with our services, including Cybersecurity Consultation, Employee Security Training, Website Security & Hardening, Cybersecurity Workshops, and our Internship programs.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-2xl font-semibold">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you interact with our services, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and company details when you fill out contact forms or register for workshops.</li>
                <li><strong>Service Data:</strong> Technical infrastructure details, vulnerability logs, and website configurations provided strictly for the purpose of Cybersecurity Consultation and Website Hardening.</li>
                <li><strong>Training & Internship Data:</strong> Academic background, progress metrics, and performance assessments related to our Internship + Courses and Employee Security Training.</li>
                <li><strong>Usage Data:</strong> Information on how you interact with our website, including IP addresses, browser types, and access times, primarily used for security monitoring and rate limiting.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-2xl font-semibold">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect strictly to deliver and improve our services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To perform security audits, vulnerability assessments, and infrastructure hardening for your organization.</li>
                <li>To customize and deliver Employee Security Training modules.</li>
                <li>To manage enrollments and evaluate candidates for our Internship programs.</li>
                <li>To respond securely to your inquiries and support requests.</li>
                <li>To protect our own infrastructure against malicious activities (e.g., through IP-based rate limiting on our forms).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-2xl font-semibold">4. Data Protection & Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                As a cybersecurity firm, protecting data is our core mission. We implement state-of-the-art technical and organizational measures to safeguard your information against unauthorized access, alteration, disclosure, or destruction. All client service data shared during security audits is treated under strict Non-Disclosure Agreements (NDAs) and is encrypted in transit and at rest.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-2xl font-semibold">5. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may only disclose your information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To trusted service providers (e.g., secure hosting environments) who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.</li>
                <li>When required by law or to respond to valid legal processes.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-2xl font-semibold">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to request access to, correction of, or deletion of your personal data held by us. If you are a client whose infrastructure we have audited, data retention is governed by our specific service agreements to ensure your ongoing security and compliance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-2xl font-semibold">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data handling practices, please contact us at:
                <br />
                <a href="mailto:contact@starinfosec.com" className="text-primary hover:underline mt-2 inline-block">contact@starinfosec.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
