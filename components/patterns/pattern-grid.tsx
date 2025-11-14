'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle, Copy } from 'lucide-react'

interface PatternGridProps {
  searchQuery: string
  selectedCategory: string | null
  viewMode: 'grid' | 'list'
}

// Mock data
const mockPatterns = [
  {
    id: '1',
    title: 'Dynamic Routes with Nested Layouts',
    description: 'Create complex nested routes with shared layouts',
    category: 'Routing',
    difficulty: 'Intermediate',
    tags: ['routing', 'layouts', 'advanced'],
    likes: 342,
    comments: 28,
    author: 'Alex Dev',
    slug: 'dynamic-routes',
  },
  {
    id: '2',
    title: 'Server Actions with Validation',
    description: 'Secure server-side operations with type-safe validation',
    category: 'API Routes',
    difficulty: 'Advanced',
    tags: ['server-actions', 'validation', 'security'],
    likes: 298,
    comments: 45,
    author: 'Sarah Code',
    slug: 'server-actions-validation',
  },
  {
    id: '3',
    title: 'Image Optimization with Next/Image',
    description: 'Best practices for automatic image optimization',
    category: 'Optimization',
    difficulty: 'Beginner',
    tags: ['images', 'performance', 'optimization'],
    likes: 567,
    comments: 32,
    author: 'Mike Builder',
    slug: 'image-optimization',
  },
  {
    id: '4',
    title: 'Real-time Data with Streaming',
    description: 'Implement streaming for faster page loads',
    category: 'Data Fetching',
    difficulty: 'Advanced',
    tags: ['streaming', 'performance', 'ssr'],
    likes: 412,
    comments: 54,
    author: 'Emma Stack',
    slug: 'streaming-data',
  },
  {
    id: '5',
    title: 'OAuth Implementation',
    description: 'Secure authentication with OAuth 2.0 providers',
    category: 'Authentication',
    difficulty: 'Intermediate',
    tags: ['oauth', 'security', 'auth'],
    likes: 256,
    comments: 18,
    author: 'John Auth',
    slug: 'oauth-impl',
  },
  {
    id: '6',
    title: 'Tailwind CSS with CSS Modules',
    description: 'Combine Tailwind CSS with CSS Modules for scoped styling',
    category: 'Styling',
    difficulty: 'Beginner',
    tags: ['tailwind', 'css-modules', 'styling'],
    likes: 189,
    comments: 12,
    author: 'Lisa Designer',
    slug: 'tailwind-css-modules',
  },
  {
    id: '7',
    title: 'Context API State Management',
    description: 'Advanced patterns for managing state with Context API',
    category: 'State Management',
    difficulty: 'Intermediate',
    tags: ['context', 'state', 'hooks'],
    likes: 324,
    comments: 41,
    author: 'Tom React',
    slug: 'context-state',
  },
  {
    id: '8',
    title: 'Deploy to Vercel with CI/CD',
    description: 'Automated deployment pipeline with GitHub Actions',
    category: 'Deployment',
    difficulty: 'Intermediate',
    tags: ['vercel', 'ci-cd', 'github'],
    likes: 445,
    comments: 67,
    author: 'Deploy Dev',
    slug: 'vercel-cicd',
  },
]

const difficultyColor = {
  Beginner: 'bg-green-500/20 text-green-700 dark:text-green-400',
  Intermediate: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400',
  Advanced: 'bg-red-500/20 text-red-700 dark:text-red-400',
}

export function PatternGrid({
  searchQuery,
  selectedCategory,
  viewMode,
}: PatternGridProps) {
  const filteredPatterns = mockPatterns.filter((pattern) => {
    const matchesSearch =
      pattern.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pattern.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pattern.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesSearch
  })

  if (viewMode === 'list') {
    return (
      <div className="space-y-3">
        {filteredPatterns.map((pattern) => (
          <Link key={pattern.id} href={`/patterns/${pattern.slug}`}>
            <Card className="hover:border-primary transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary">
                        {pattern.title}
                      </h3>
                      <Badge className={difficultyColor[pattern.difficulty as keyof typeof difficultyColor]}>
                        {pattern.difficulty}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{pattern.description}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {pattern.category}
                      </Badge>
                      {pattern.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredPatterns.map((pattern) => (
        <Link key={pattern.id} href={`/patterns/${pattern.slug}`}>
          <Card className="h-full hover:border-primary transition-colors cursor-pointer group">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge
                  className={difficultyColor[pattern.difficulty as keyof typeof difficultyColor]}
                >
                  {pattern.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4 fill-current" />
                  {pattern.likes}
                </div>
              </div>
              <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-base">
                {pattern.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="line-clamp-2">
                {pattern.description}
              </CardDescription>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  {pattern.category}
                </Badge>
                {pattern.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
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
