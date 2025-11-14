'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PatternEditor } from '@/components/patterns/pattern-editor'
import { PatternComments } from '@/components/patterns/pattern-comments'
import { Heart, Share2, Copy, BookmarkPlus, Zap } from 'lucide-react'

export default function PatternDetailPage({ params }: { params: { slug: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(342)

  const pattern = {
    id: '1',
    title: 'Dynamic Routes with Nested Layouts',
    description: 'Create complex nested routes with shared layouts in Next.js 15 with the App Router',
    category: 'Routing',
    difficulty: 'Intermediate',
    tags: ['routing', 'layouts', 'advanced', 'next.js-15'],
    likes: likeCount,
    comments: 28,
    author: 'Alex Dev',
    authorImage: '/diverse-avatars.png',
    code: `// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

// app/dashboard/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <nav>{/* Sidebar */}</nav>
      <main>{children}</main>
    </div>
  )
}

// app/dashboard/page.tsx
export default function DashboardPage() {
  return <h1>Dashboard</h1>
}`,
    explanation: `# Dynamic Routes with Nested Layouts

## Overview
This pattern demonstrates how to create nested layouts in Next.js 15 using the App Router. Each segment of the route can have its own layout, allowing for powerful UI composition.

## Key Features
- **Nested Layouts**: Each folder can have a layout.tsx
- **Segment-based**: Layouts are scoped to their route segment
- **Shared Navigation**: Parent layouts wrap child content
- **Type-safe**: Full TypeScript support

## Implementation Steps
1. Create a folder structure for your routes
2. Add layout.tsx in each segment
3. Export default component that receives children prop
4. Customize styles and navigation per segment

## Best Practices
- Keep layouts focused and lightweight
- Use metadata for SEO in layouts
- Leverage client/server components strategically
- Consider performance impact of nested layouts`,
    performanceTips: `## Performance Optimization Tips

### 1. Code Splitting
Use dynamic imports for large components within layouts:
\`\`\`typescript
const Sidebar = dynamic(() => import('./sidebar'), { 
  loading: () => <div>Loading...</div> 
})
\`\`\`

### 2. Selective Re-renders
Only re-render necessary segments when state changes. Use server components by default.

### 3. Image Optimization
Use next/image for responsive, optimized images in layout components.

### 4. CSS Strategy
Keep CSS scoped to avoid conflicts in nested layouts. Consider CSS-in-JS or CSS Modules.

### 5. Bundle Size
Monitor your layout bundle size to ensure fast initial loads.`,
    createdAt: '2025-01-15',
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(pattern.code)
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{pattern.title}</h1>
              <p className="text-lg text-muted-foreground">{pattern.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400">
                {pattern.difficulty}
              </Badge>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div>by {pattern.author}</div>
            <div>•</div>
            <div>{pattern.createdAt}</div>
            <div>•</div>
            <div>{pattern.comments} comments</div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline">{pattern.category}</Badge>
            {pattern.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={isLiked ? 'default' : 'outline'}
              onClick={handleLike}
              className="gap-2"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              Like ({likeCount})
            </Button>
            <Button
              variant={isBookmarked ? 'default' : 'outline'}
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="gap-2"
            >
              <BookmarkPlus className="w-4 h-4" />
              Save
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button variant="outline" onClick={handleCopy} className="gap-2">
              <Copy className="w-4 h-4" />
              Copy
            </Button>
            <Button className="gap-2">
              <Zap className="w-4 h-4" />
              Try with AI
            </Button>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="code" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="explanation">Explanation</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
          </TabsList>

          <TabsContent value="code" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Code Example</CardTitle>
                <CardDescription>
                  Copy this code to get started with this pattern
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PatternEditor code={pattern.code} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="explanation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  {pattern.explanation.split('\n\n').map((paragraph, idx) => (
                    <div key={idx} className="mb-4">
                      {paragraph.startsWith('##') ? (
                        <h3 className="text-lg font-semibold my-4">
                          {paragraph.replace('## ', '')}
                        </h3>
                      ) : paragraph.startsWith('###') ? (
                        <h4 className="text-base font-semibold my-3">
                          {paragraph.replace('### ', '')}
                        </h4>
                      ) : paragraph.startsWith('-') ? (
                        <ul className="list-disc list-inside space-y-1">
                          {paragraph.split('\n').map((item, i) => (
                            <li key={i}>{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground">{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pattern.performanceTips.split('\n\n').map((section, idx) => (
                    <div key={idx}>
                      {section.startsWith('##') ? (
                        <h3 className="text-base font-semibold mb-2">
                          {section.replace('## ', '')}
                        </h3>
                      ) : section.startsWith('###') ? (
                        <h4 className="text-sm font-semibold mb-1 text-primary">
                          {section.replace('### ', '')}
                        </h4>
                      ) : (
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                          {section}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comments" className="space-y-4">
            <PatternComments patternId={pattern.id} initialComments={28} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
