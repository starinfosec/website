import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target, Shield, Users, Lightbulb } from "lucide-react"

export default function MissionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-blue-100">
              Helping small businesses and startups stay secure with top-level AI-powered cybersecurity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission Statement</h2>
              <p className="text-lg text-gray-700 mb-4">
                Protect startups and businesses with budget-friendly security.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                
              </p>
              <p className="text-lg text-gray-700">
                
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image src="/mission.gif" alt="StarInfoSec Mission" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Objectives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The key goals that drive our daily operations and long-term strategy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Protecting business data, reputation, and customer trust.</h3>
              <p className="text-gray-600">
                
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educating businesses to spot and prevent security threats.</h3>
              <p className="text-gray-600">
                
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovating to keep clients safe from cyber risks.</h3>
              <p className="text-gray-600">
                
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborating with clients as trusted cybersecurity partners.</h3>
              <p className="text-gray-600">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Fulfill Our Mission */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Fulfill Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The practical ways we work to achieve our mission every day.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">In-depth penetration testing with industry-standard tools.</h3>
              <p className="text-gray-700 mb-4">
              
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Web application penetration testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Social Engineering Tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Vulnerability Assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">AI/LLM Pentesting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Making cybersecurity training simple for all employees.</h3>
              <p className="text-gray-700 mb-4">
                
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Security awareness training for all employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Hands-On Exercises </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Continuous Improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Simulated phishing campaigns</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Professional consulting for effective security planning.</h3>
              <p className="text-gray-700 mb-4">
                
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Security program development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Risk Assessment & Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Security policy development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Incident response planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Helping businesses stay secure with continuous support.</h3>
              <p className="text-gray-700 mb-4">
                
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Regular security assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Vulnerability management assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Security advisory services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Emergency incident response</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Us in Our Mission</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the hundreds of small businesses and startups that have strengthened their security posture with
              StarInfoSec.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-100">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
