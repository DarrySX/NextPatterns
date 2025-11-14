import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Ready to contribute?</span>
        </div>

        <h2 className="text-4xl font-bold mb-4">Share Your Own Pattern</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Have a unique Next.js pattern? Contribute to the community and help other developers learn and grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/patterns/new">
              Create New Pattern
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs">
              View Guidelines
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
