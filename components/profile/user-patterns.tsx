'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, MessageCircle } from 'lucide-react'

interface UserPatternsProps {
  patterns: number
}

const mockPatterns = [
  {
    id: '1',
    title: 'Dynamic Routes with Nested Layouts',
    description: 'Create complex nested routes with shared layouts',
    category: 'Routing',
    likes: 342,
    comments: 28,
    date: '2 weeks ago',
    slug: 'dynamic-routes',
  },
  {
    id: '2',
    title: 'Server Actions with Validation',
    description: 'Secure server-side operations with type-safe validation',
    category: 'API Routes',
    likes: 298,
    comments: 45,
    date: '1 week ago',
    slug: 'server-actions-validation',
  },
  {
    id: '3',
    title: 'Real-time Data with Streaming',
    description: 'Implement streaming for faster page loads',
    category: 'Data Fetching',
    likes: 412,
    comments: 54,
    date: '3 days ago',
    slug: 'streaming-data',
  },
]

export function UserPatterns({ patterns }: UserPatternsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">All Patterns ({patterns})</h3>
        <Link href="/patterns/new" className="text-primary hover:underline text-sm">
          Create New
        </Link>
      </div>

      {mockPatterns.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center text-muted-foreground">
            <p>No patterns created yet. Start building!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockPatterns.map((pattern) => (
            <Link key={pattern.id} href={`/patterns/${pattern.slug}`}>
              <Card className="h-full hover:border-primary transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{pattern.category}</Badge>
                    <span className="text-xs text-muted-foreground">{pattern.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-base group-hover:text-primary transition-colors">
                    {pattern.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-2">
                    {pattern.description}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-2 border-t border-border text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 fill-current" />
                        {pattern.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {pattern.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
