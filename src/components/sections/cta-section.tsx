
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function CtaSection() {
  const ctaImage = PlaceHolderImages.find(img => img.id === 'cta-background');
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
        {ctaImage && (
            <>
                <Image
                    src={ctaImage.imageUrl}
                    alt={ctaImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint="digital security"
                />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            </>
        )}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in zoom-in-95 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to secure your digital assets?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Contact us today to get started.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
