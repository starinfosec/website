'use client';

import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { blogPosts, BlogPost } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft } from 'lucide-react';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;
  const post = blogPosts.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Post not found</h1>
            <p className="mt-4 text-muted-foreground">The blog post you are looking for does not exist.</p>
            <Button asChild className="mt-8">
              <Link href="/blog">
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const image = PlaceHolderImages.find(img => img.id === post.imageId);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <article className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="animate-in fade-in slide-in-from-top-16 duration-700">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">{post.excerpt}</p>
            </div>
            
            {image && (
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg mt-12 animate-in fade-in zoom-in-95 duration-700 delay-200">
                <Image
                  src={image.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div 
              className="prose mt-12 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-400 dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
             <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
                <Button asChild size="lg">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
