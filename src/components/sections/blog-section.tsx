
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog"
import { Button } from "../ui/button"

export function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);
  return (
    <section id="blog" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-top-16 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From the Blog
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Stay up to date with the latest news, tutorials, and announcements from the StarInfoSec team.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => {
            const image = PlaceHolderImages.find(img => img.id === post.id)!;
            return (
              <Card key={post.id} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 200}ms`}}>
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="font-headline text-xl font-semibold">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-3 text-muted-foreground flex-1">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center font-medium text-primary group-hover:underline">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
         <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Button asChild size="lg">
                <Link href="/blog">View All Posts</Link>
            </Button>
        </div>
      </div>
    </section>
  )
}
