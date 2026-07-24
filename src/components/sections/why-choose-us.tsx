import { ShieldCheck, Users, Award, Settings } from 'lucide-react';

const reasons = [
  {
    title: "Expert Team",
    description: "Our certified professionals bring years of deep industry experience to protect your digital assets against the most advanced threats.",
    icon: Users,
  },
  {
    title: "Proactive Security",
    description: "We don't just react to breaches. We actively seek out vulnerabilities and neutralize them before attackers can exploit them.",
    icon: ShieldCheck,
  },
  {
    title: "Tailored Solutions",
    description: "Security isn't one-size-fits-all. We design customized frameworks that perfectly align with your unique business operations and risk profile.",
    icon: Settings,
  },
  {
    title: "Proven Track Record",
    description: "Trusted by industry leaders, our comprehensive security programs have successfully fortified infrastructure across multiple critical sectors.",
    icon: Award,
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose <span className="text-primary">StarInfoSec</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are dedicated to safeguarding your digital future with unparalleled expertise and innovative security strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title} 
              className="group relative p-8 rounded-3xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 font-headline">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
