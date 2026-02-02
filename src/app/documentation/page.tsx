
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Users, LifeBuoy } from "lucide-react";

const docSections = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Getting Started",
    description: "Learn how to start with our services. This guide shows you how to contact us, choose the right service, and begin improving your security step by step."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Service Guides",
    description: "Easy guides for each service we provide, such as Cybersecurity Consultation, Website Security Testing, Security Training, and Internship Programs. Understand what we do and how it helps you."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Working With Us",
    description: "Learn how our security services fit into your business systems and daily operations. This section explains how we support you during and after the service."
  },
    {
    icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    title: "Help & Support",
    description: "Find answers to common questions, understand security reports, and get help from our support team whenever you need it."
  }
];

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Documentation
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
                Your comprehensive guide to our security platform. Find everything you need to get started and master our tools.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {docSections.map((section, index) => (
                <Card key={section.title} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardHeader className="flex-row items-center gap-4 p-6">
                    <div className="rounded-full bg-primary/10 p-4 transition-all duration-300 group-hover:scale-110">
                      {section.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground">{section.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
