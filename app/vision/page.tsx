import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Target, TrendingUp, Globe } from "lucide-react"

export default function VisionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h1>
            <p className="text-xl text-blue-100">Creating a safer digital world for businesses of all sizes with AI-powered cybersecurity.</p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px]">
              <Image src="/vision.gif" alt="StarInfoSec Vision" fill className="object-cover rounded-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision Statement</h2>
              <p className="text-lg text-gray-700 mb-4">
                Protecting every business from evolving cyber threats.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                
              </p>
              <p className="text-lg text-gray-700">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Strategic Pillars</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The key focus areas that guide our vision and long-term strategy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity solutions accessible to all businesses.</h3>
              <p className="text-gray-600 mb-4">
                



              </p>
              <p className="text-gray-600">
               
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Embedding cybersecurity into everyday business practices.</h3>
              <p className="text-gray-600 mb-4">
                
              </p>
              <p className="text-gray-600">
                
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Staying ahead with continuous security innovation.</h3>
              <p className="text-gray-600 mb-4">
                
              </p>
              <p className="text-gray-600">
                
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Creating global impact with stronger cybersecurity.</h3>
              <p className="text-gray-600 mb-4">
               
              </p>
              <p className="text-gray-600">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking to the Future</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our long-term goals and aspirations for StarInfoSec and the cybersecurity industry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">By 2025</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <p className="text-gray-700">
                      Making security assessments easy and affordable.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <p className="text-gray-700">
                      Simple security awareness programs for employees.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <p className="text-gray-700">
                      Collaborating with businesses for better cybersecurity.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">By 2030</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <p className="text-gray-700">
                      Automated AI security for growing businesses.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <p className="text-gray-700">
                     Worldwide cybersecurity support for businesses.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <p className="text-gray-700">
                      Developing easy security frameworks for small companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Our Vision</h2>
            <p className="text-xl text-blue-100 mb-8">
              Partner with StarInfoSec to help create a more secure digital future for your business and beyond.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-100">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
