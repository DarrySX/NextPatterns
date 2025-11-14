import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, MessageCircle } from 'lucide-react'

const trendingPatterns = [
  {
    id: '1',
    title: 'Dynamic Routes with Nested Layouts',
    description: 'Create complex nested routes with shared layouts',
    category: 'Routing',
    tags: ['routing', 'layouts', 'advanced'],
    likes: 342,
    comments: 28,
    author: 'Alex Dev',
  },
  {
    id: '2',
    title: 'Server Actions with Validation',
    description: 'Secure server-side operations with type-safe validation',
    category: 'API Routes',
    tags: ['server-actions', 'validation', 'security'],
    likes: 298,
    comments: 45,
    author: 'Sarah Code',
  },
  {
    id: '3',
    title: 'Image Optimization with Next/Image',
    description: 'Best practices for automatic image optimization',
    category: 'Optimization',
    tags: ['images', 'performance', 'optimization'],
    likes: 567,
    comments: 32,
    author: 'Mike Builder',
  },
  {
    id: '4',
    title: 'Real-time Data with Streaming',
    description: 'Implement streaming for faster page loads',
    category: 'Data Fetching',
    tags: ['streaming', 'performance', 'ssr'],
    likes: 412,
    comments: 54,
    author: 'Emma Stack',
  },
]

export function TrendingPatterns() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {trendingPatterns.map((pattern) => (
        <Link key={pattern.id} href={`/patterns/${pattern.id}`}>
          <Card className="h-full hover:border-primary transition-colors cursor-pointer group">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary">{pattern.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4 fill-current" />
                  {pattern.likes}
                </div>
              </div>
              <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                {pattern.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="line-clamp-2">
                {pattern.description}
              </CardDescription>
              <div className="flex flex-wrap gap-1">
                {pattern.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border text-sm text-muted-foreground">
                <span>by {pattern.author}</span>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {pattern.comments}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
