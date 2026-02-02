
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function GitHubIntegration() {
  const githubImage = PlaceHolderImages.find(img => img.id === 'github-integration')!;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={githubImage.imageUrl}
          alt={githubImage.description}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-in fade-in zoom-in-95 duration-700">
        <ShieldCheck className="h-16 w-16 mx-auto text-white" />
        <h2 className="mt-8 font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Our Commitment to Security
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-300">
         we are committed to delivering enterprise-grade cybersecurity protection for your business. Our expert security team analyzes emerging risks, and implements proactive defense strategies to safeguard your digital assets, systems, and data.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg" asChild className="bg-white text-gray-900 hover:bg-gray-200">
            <a href="/services">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
