import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Github, MessageSquare, Users } from 'lucide-react'
import { CommunityActionButton } from '@/components/docs/community-action-buttons'

export const metadata = {
  title: 'Community - NextPatterns',
  description: 'Connect with other developers and build together.',
}

export default function CommunityPage() {
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
          <h1 className="text-5xl font-bold mb-4">Community</h1>
          <p className="text-xl text-muted-foreground">
            Connect with other developers and build together.
          </p>
        </div>

        {/* Code of Conduct */}
        <section className="mb-12" id="conduct">
          <h2 className="text-3xl font-bold mb-4">Code of Conduct</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              NextPatterns is a welcoming and inclusive community. To ensure everyone feels safe and respected, we ask all community members to follow our Code of Conduct:
            </p>
            <div className="space-y-3 mt-6">
              {[
                'Be respectful and kind to all community members',
                'No harassment, discrimination, or offensive language',
                'Respect different opinions and experiences',
                'Give and accept constructive feedback gracefully',
                'Help others learn and grow in their development journey',
                'Report violations to our moderation team',
                'Have fun and enjoy the community spirit!',
              ].map((rule, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Help */}
        <section className="mb-12" id="help">
          <h2 className="text-3xl font-bold mb-4">Getting Help</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Have questions or need help? Here are the best ways to get support from the NextPatterns community:
            </p>
            <div className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Discussion Forum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Post questions and engage in discussions with the community. Topics include pattern advice, best practices, and general questions.
                  </p>
                  <CommunityActionButton label="Discussion forum">
                    Visit Forum
                  </CommunityActionButton>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5 text-primary" />
                    Community Chat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Join our Discord or Slack community for real-time chat and quick questions. Great for connecting with other developers!
                  </p>
                  <CommunityActionButton label="Community chat">
                    Join Chat
                  </CommunityActionButton>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Github className="w-5 h-5 text-primary" />
                    GitHub Issues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Report bugs or suggest features on GitHub. Our team monitors issues and prioritizes based on community feedback.
                  </p>
                  <CommunityActionButton label="GitHub repository">
                    View Issues
                  </CommunityActionButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sharing Your Work */}
        <section className="mb-12" id="sharing">
          <h2 className="text-3xl font-bold mb-4">Sharing Your Work</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Proud of your pattern? Here are the best ways to share it with the community:
            </p>
            <div className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Share on Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Use the Share button to get a link and share your pattern on Twitter, LinkedIn, or other platforms. Help others discover great patterns!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contribute to Main Collection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Submit your pattern for inclusion in the main NextPatterns collection. This gives it more visibility and recognition in the community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Write a Blog Post</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Consider writing a blog post about your pattern. Many developers love learning from detailed articles and tutorials.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Get Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Share your work in the community to get constructive feedback. The NextPatterns community is supportive and loves helping each other improve!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border pt-8 mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join the Community?</h2>
            <p className="text-muted-foreground mb-6">
              Start exploring, learning, and sharing patterns with NextPatterns today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/playground">Open Playground</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/patterns">Browse Patterns</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
