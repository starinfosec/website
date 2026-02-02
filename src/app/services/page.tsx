import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ServiceShowcase } from '@/components/sections/service-showcase';
import { CtaSection } from '@/components/sections/cta-section';
import { ServiceProcess } from '@/components/sections/service-process';

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <ServiceShowcase />
        <ServiceProcess />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
