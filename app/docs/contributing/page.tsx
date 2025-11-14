import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Contributing Patterns - NextPatterns',
  description: 'Share your knowledge by creating and submitting patterns.',
}

export default function ContributingPage() {
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
          <h1 className="text-5xl font-bold mb-4">Contributing Patterns</h1>
          <p className="text-xl text-muted-foreground">
            Share your knowledge by creating and submitting patterns to NextPatterns.
          </p>
        </div>

        {/* Pattern Guidelines */}
        <section className="mb-12" id="guidelines">
          <h2 className="text-3xl font-bold mb-4">Pattern Guidelines</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Before creating a pattern, please review these guidelines to ensure your pattern meets our quality standards:
            </p>
            <div className="space-y-3 mt-6">
              {[
                'Your pattern should solve a real-world problem',
                'Include clear, well-commented code examples',
                'Provide explanations of why this pattern is useful',
                'Include performance considerations and trade-offs',
                'Test your pattern thoroughly before submission',
                'Follow Next.js best practices and conventions',
                'Make sure the pattern is original or significantly improved',
              ].map((guideline, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{guideline}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creating a Pattern */}
        <section className="mb-12" id="create">
          <h2 className="text-3xl font-bold mb-4">Creating a Pattern</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Here's how to create and submit a pattern to NextPatterns:
            </p>
            <div className="space-y-4 mt-6">
              {[
                {
                  step: '1',
                  title: 'Sign Up/Log In',
                  description: 'Create an account or log in to your existing NextPatterns account.',
                },
                {
                  step: '2',
                  title: 'Open the Playground',
                  description: 'Navigate to the Playground and start coding your pattern.',
                },
                {
                  step: '3',
                  title: 'Write Your Pattern',
                  description: 'Create your code example with clear comments and documentation.',
                },
                {
                  step: '4',
                  title: 'Test Thoroughly',
                  description: 'Test your pattern in different scenarios to ensure it works correctly.',
                },
                {
                  step: '5',
                  title: 'Save Your Work',
                  description: 'Use the Save button to save your pattern to your profile.',
                },
                {
                  step: '6',
                  title: 'Submit for Review',
                  description: 'Submit your pattern for community review and approval.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12" id="practices">
          <h2 className="text-3xl font-bold mb-4">Best Practices</h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Code Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Write clean, well-organized code following Next.js and React best practices. Use meaningful variable names and include comments for complex logic.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Provide clear documentation explaining what your pattern does, how to use it, and when to use it. Include examples and edge cases.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Consider performance implications of your pattern. Explain any trade-offs and provide optimization tips when applicable.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Test your pattern thoroughly in various scenarios. Include edge cases and error handling considerations in your documentation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="border-t border-border pt-8 mt-12 flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/docs/getting-started">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: Getting Started
            </Link>
          </Button>
          <Button asChild>
            <Link href="/docs/playground">
              Next: Playground Features
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
