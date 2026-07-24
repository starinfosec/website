import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { FeatureHighlights } from '@/components/sections/feature-highlights';
import { GitHubIntegration } from '@/components/sections/github-integration';
import { BlogSection } from '@/components/sections/blog-section';
import { CtaSection } from '@/components/sections/cta-section';
import { TrustedPartners } from '@/components/sections/trusted-partners';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { WhyCybersecurityImportant } from '@/components/sections/why-cybersecurity-important';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedPartners />
        <WhyCybersecurityImportant />
        <WhyChooseUs />
        <FeatureHighlights />
        <GitHubIntegration />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}