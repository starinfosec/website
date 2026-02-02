import { Search, FileText, Rocket, ClipboardCheck, LifeBuoy } from "lucide-react";
import { Card } from "@/components/ui/card";

const processSteps = [
    {
        icon: <Search className="h-10 w-10 text-primary" />,
        title: "1. Consultation",
        description: "We begin with a thorough consultation to understand your unique business needs and security requirements."
    },
    {
        icon: <FileText className="h-10 w-10 text-primary" />,
        title: "2. Proposal",
        description: "We create a detailed security proposal outlining the scope, timeline, and deliverables for your project."
    },
    {
        icon: <Rocket className="h-10 w-10 text-primary" />,
        title: "3. Execution",
        description: "Our expert team executes the security plan, providing regular updates and highlighting key findings."
    },
    {
        icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
        title: "4. Reporting",
        description: "You'll receive a comprehensive report with clear, prioritized recommendations for security improvements."
    },
    {
        icon: <LifeBuoy className="h-10 w-10 text-primary" />,
        title: "5. Support",
        description: "We offer ongoing support to help you implement recommendations and maintain a strong security posture."
    }
];

export function ServiceProcess() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Service Process
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            A transparent and collaborative approach to strengthening your security.
          </p>
        </div>
        <div className="mt-20 space-y-8">
            {processSteps.map((step, index) => (
                <Card key={step.title} className="p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-16 duration-700" style={{ animationDelay: `${index * 200}ms`}}>
                    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                        <div className="flex-shrink-0 rounded-full bg-primary/10 p-6">
                            {step.icon}
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="font-headline text-xl sm:text-2xl font-bold">{step.title}</h3>
                            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
                                {step.description}
                            </p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
