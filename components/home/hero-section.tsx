import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-6">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-primary">New: AI Pattern Analysis</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          Master Next.js with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Interactive Patterns</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Explore production-ready Next.js patterns, get AI-powered insights, and learn from the community. Become a better developer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild className="group">
            <Link href="/patterns">
              Explore Patterns
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/playground">
              Try Playground
            </Link>
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Trusted by developers at</p>
          <div className="flex items-center justify-center gap-8 mt-4 opacity-60">
            <span>Next.js</span>
            <span>Vercel</span>
            <span>React</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  )
}
