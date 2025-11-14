import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code2, Zap, Users, BookOpen, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Documentation - NextPatterns',
  description: 'Learn how to use NextPatterns and contribute your own patterns.',
}

export default function DocsPage() {
  const sections = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics of NextPatterns and how to explore patterns.',
      href: '/docs/getting-started',
      links: [
        { label: 'What is NextPatterns?', href: '/docs/getting-started#what-is' },
        { label: 'Browsing Patterns', href: '/docs/getting-started#browsing' },
        { label: 'Using the Playground', href: '/docs/getting-started#playground' },
      ],
    },
    {
      icon: Code2,
      title: 'Contributing Patterns',
      description: 'Share your knowledge by creating and submitting patterns.',
      href: '/docs/contributing',
      links: [
        { label: 'Pattern Guidelines', href: '/docs/contributing#guidelines' },
        { label: 'Creating a Pattern', href: '/docs/contributing#create' },
        { label: 'Best Practices', href: '/docs/contributing#practices' },
      ],
    },
    {
      icon: Zap,
      title: 'Playground Features',
      description: 'Master the interactive code editor and preview environment.',
      href: '/docs/playground',
      links: [
        { label: 'Editor Basics', href: '/docs/playground#editor' },
        { label: 'File Management', href: '/docs/playground#files' },
        { label: 'Preview & Debugging', href: '/docs/playground#preview' },
      ],
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with other developers and build together.',
      href: '/docs/community',
      links: [
        { label: 'Code of Conduct', href: '/docs/community#conduct' },
        { label: 'Getting Help', href: '/docs/community#help' },
        { label: 'Sharing Your Work', href: '/docs/community#sharing' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Documentation</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Welcome to NextPatterns Docs</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your comprehensive guide to mastering modern Next.js patterns and best practices.
          </p>
          <Button asChild size="lg">
            <Link href="#sections">
              Explore Docs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 px-4" id="sections">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Card key={section.title} className="hover:border-primary/50 transition cursor-pointer">
                  <Link href={section.href}>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Icon className="w-5 h-5 text-primary" />
                            {section.title}
                          </CardTitle>
                          <CardDescription>{section.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Link>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition inline-flex items-center gap-1"
                          >
                            {link.label}
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick Start */}
          <Card className="bg-primary/5 border-primary/20 mb-16">
            <CardHeader>
              <CardTitle>Quick Start Guide</CardTitle>
              <CardDescription>Get up and running with NextPatterns in 5 minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Create an Account',
                    description: 'Sign up to save patterns and share your work with the community.',
                  },
                  {
                    step: '2',
                    title: 'Explore Patterns',
                    description: 'Browse our collection of curated Next.js patterns by category.',
                  },
                  {
                    step: '3',
                    title: 'Use the Playground',
                    description: 'Test and experiment with patterns in our interactive code editor.',
                  },
                  {
                    step: '4',
                    title: 'Share Your Knowledge',
                    description: 'Contribute your own patterns to help the community grow.',
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
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            {[
              {
                q: 'What is NextPatterns?',
                a: 'NextPatterns is a community-driven platform for sharing and discovering modern Next.js patterns and best practices.',
              },
              {
                q: 'How do I save my patterns?',
                a: 'After logging in, you can save patterns using the Save button in the Playground. They will be stored in your profile.',
              },
              {
                q: 'Can I share my patterns with others?',
                a: 'Yes! Use the Share button to get a shareable link to your pattern. You can also contribute to the main collection.',
              },
              {
                q: 'Is there a cost?',
                a: 'NextPatterns is completely free. We are a community project dedicated to helping developers learn.',
              },
            ].map((item, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-base">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Dive into the playground and start exploring Next.js patterns today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/playground">
                Open Playground
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/patterns">Browse Patterns</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
