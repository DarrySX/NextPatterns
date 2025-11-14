import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Getting Started - NextPatterns',
  description: 'Learn the basics of NextPatterns and how to explore patterns.',
}

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Button variant="outline" asChild className="mb-8">
          <Link href="/docs">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Docs
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Getting Started</h1>
          <p className="text-xl text-muted-foreground">
            Learn the basics of NextPatterns and how to explore patterns.
          </p>
        </div>

        {/* What is NextPatterns */}
        <section className="mb-12" id="what-is">
          <h2 className="text-3xl font-bold mb-4">What is NextPatterns?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              NextPatterns is an interactive platform designed for developers who want to learn, share, and master modern Next.js patterns and best practices. Whether you're a beginner exploring Next.js for the first time or an experienced developer looking for advanced patterns, NextPatterns has something for you.
            </p>
            <p>
              Our community-driven approach means that patterns are constantly being updated, improved, and added by developers like you. Each pattern includes explanations, code examples, and performance tips to help you understand not just the "what" but also the "why" behind each pattern.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="space-y-2 ml-4">
                <li>• 1000+ curated Next.js patterns</li>
                <li>• Interactive code editor and preview</li>
                <li>• AI-powered code analysis and suggestions</li>
                <li>• Community discussion and feedback</li>
                <li>• Save and share your own patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Browsing Patterns */}
        <section className="mb-12" id="browsing">
          <h2 className="text-3xl font-bold mb-4">Browsing Patterns</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The Patterns page is your central hub for discovering Next.js patterns. You can browse patterns in several ways:
            </p>
            <div className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">By Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Browse patterns organized by category such as Routing, State Management, API Integration, Performance, and more. Each category contains patterns at different difficulty levels.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">By Difficulty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Filter patterns by difficulty level - Beginner, Intermediate, or Advanced. This helps you find patterns that match your skill level.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Use the search bar to find specific patterns by name, description, or tags. Search results are instant and updated as you type.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Trending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Discover patterns that are most popular this week. Great for seeing what other developers are learning and using.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button asChild className="mt-8">
              <Link href="/patterns">
                Browse All Patterns
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Using the Playground */}
        <section className="mb-12" id="playground">
          <h2 className="text-3xl font-bold mb-4">Using the Playground</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The Playground is where you can experiment with patterns in real-time. It's an interactive code editor that lets you write, test, and debug code directly in your browser.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
              <h3 className="font-semibold mb-2">Getting Started with Playground:</h3>
              <ol className="space-y-2 ml-4">
                <li>1. Click "Open Playground" to launch the editor</li>
                <li>2. Start with a template or create from scratch</li>
                <li>3. Write your code in the left panel</li>
                <li>4. See live preview in the right panel</li>
                <li>5. Use AI Assistant for suggestions and optimization</li>
                <li>6. Save your work to your profile</li>
              </ol>
            </div>

            <Button asChild className="mt-8">
              <Link href="/playground">
                Open Playground
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="border-t border-border pt-8 mt-12 flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/docs">Back to Docs</Link>
          </Button>
          <Button asChild>
            <Link href="/docs/contributing">
              Next: Contributing
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
