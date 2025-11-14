import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code2, Zap, Users, BookOpen } from 'lucide-react'
import { HeroSection } from '@/components/home/hero-section'
import { CategoryGrid } from '@/components/home/category-grid'
import { TrendingPatterns } from '@/components/home/trending-patterns'
import { CTASection } from '@/components/home/cta-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <Card className="border-border">
              <CardHeader>
                <Code2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">1000+ Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Curated collection of Next.js patterns and best practices
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Zap className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">AI-Powered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get AI insights on code optimization and improvements
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn from and contribute with other developers
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">Learn & Share</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Interactive playground to experiment and test patterns
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">Browse by Category</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find patterns organized by category to quickly locate what you need
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Trending Now</h2>
              <p className="text-muted-foreground">Most liked patterns this week</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/patterns">View all <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <TrendingPatterns />
        </div>
      </section>

      <CTASection />
    </main>
  )
}
