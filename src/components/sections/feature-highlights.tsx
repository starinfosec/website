
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const features = [
  {
    title: "Penetration Testing Benefits",
    description: "Discover how our penetration testing services can safeguard your business and build customer trust.",
    points: [
      "Spot potential security problems before hackers can take advantage of them.",
      "Show your customers that their data and privacy are safe with you.",
      "Improve your overall protection with easy-to-follow security advice.",
      "Keep sensitive information safe and avoid costly breaches.",
      "Get simple reports with steps to fix any issues quickly.",
    ],
    imageId: "penetration-testing-image",
    imageHint: "security scan"
  },
  {
    title: "Our Testing Methodologies",
    description: "We employ a range of testing methodologies to provide a comprehensive assessment of your security posture.",
    points: [
      "White Box Testing: Testers know the system well, check every part carefully, and find weak spots inside.",
      "Gray Box Testing: Testers know some details, test with normal user access, and discover issues quickly.",
      "Black Box Testing: Testers know nothing about the system, simulate real hacker attacks, and focus on external weaknesses.",
    ],
    imageId: "methodologies-image",
    imageHint: "data analysis"
  },
]

export function FeatureHighlights() {
    const penetrationFeature = features[0];
    const methodologiesFeature = features[1];
    const penetrationImage = PlaceHolderImages.find(img => img.id === penetrationFeature.imageId)!;
    const methodologiesImage = PlaceHolderImages.find(img => img.id === methodologiesFeature.imageId)!;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Designed for Modern Security
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Our solutions are built with a focus on proactive defense, enabling you to operate with confidence.
          </p>
        </div>
        
        <div className="mt-24 space-y-24">
            {/* Penetration Testing */}
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="animate-in fade-in slide-in-from-left-16 duration-700 delay-200">
                    <Image 
                        src={penetrationImage.imageUrl}
                        alt={penetrationImage.description}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl"
                        data-ai-hint={penetrationFeature.imageHint}
                    />
                </div>
                <div className="animate-in fade-in slide-in-from-right-16 duration-700 delay-400">
                    <h3 className="font-headline text-2xl font-semibold text-primary">{penetrationFeature.title}</h3>
                    <p className="mt-4 text-muted-foreground">{penetrationFeature.description}</p>
                    <ul className="mt-6 space-y-4">
                      {penetrationFeature.points.map((point) => (
                          <li key={point} className="flex items-start gap-4">
                            <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                      ))}
                    </ul>
                </div>
            </div>

            {/* Testing Methodologies */}
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="md:order-2 animate-in fade-in slide-in-from-right-16 duration-700 delay-200">
                     <Image 
                        src={methodologiesImage.imageUrl}
                        alt={methodologiesImage.description}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl"
                        data-ai-hint={methodologiesFeature.imageHint}
                    />
                </div>
                <div className="md:order-1 animate-in fade-in slide-in-from-left-16 duration-700 delay-400">
                    <h3 className="font-headline text-2xl font-semibold text-primary">{methodologiesFeature.title}</h3>
                    <p className="mt-4 text-muted-foreground">{methodologiesFeature.description}</p>
                    <ul className="mt-6 space-y-4">
                      {methodologiesFeature.points.map((point) => {
                        const [heading, ...rest] = point.split(': ');
                        const description = rest.join(': ');
                        return (
                            <li key={point} className="flex items-start gap-4">
                                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                    {description ? (
                                        <>
                                            <strong className="font-semibold text-foreground">{heading}:</strong> {description}
                                        </>
                                    ) : (
                                        point
                                    )}
                                </span>
                            </li>
                        );
                      })}
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}
