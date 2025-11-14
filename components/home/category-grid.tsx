import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'routing',
    title: 'Routing',
    description: 'App Router, dynamic routes, and navigation patterns',
    icon: '🛣️',
    count: 124,
  },
  {
    id: 'data-fetching',
    title: 'Data Fetching',
    description: 'Server components, async operations, and caching strategies',
    icon: '📡',
    count: 98,
  },
  {
    id: 'api-routes',
    title: 'API Routes',
    description: 'Backend routes, middlewares, and request handling',
    icon: '⚙️',
    count: 87,
  },
  {
    id: 'optimization',
    title: 'Optimization',
    description: 'Performance tips, image optimization, and bundle reduction',
    icon: '⚡',
    count: 156,
  },
  {
    id: 'authentication',
    title: 'Authentication',
    description: 'Auth patterns, sessions, and security best practices',
    icon: '🔐',
    count: 92,
  },
  {
    id: 'styling',
    title: 'Styling',
    description: 'Tailwind CSS, CSS modules, and component styling',
    icon: '🎨',
    count: 134,
  },
  {
    id: 'state-management',
    title: 'State Management',
    description: 'Context API, hooks, and state patterns',
    icon: '📊',
    count: 76,
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description: 'Vercel deployment, CI/CD, and production setup',
    icon: '🚀',
    count: 65,
  },
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/patterns?category=${category.id}`}>
          <Card className="h-full hover:border-primary transition-colors cursor-pointer group">
            <CardHeader>
              <div className="text-4xl mb-2">{category.icon}</div>
              <CardTitle className="group-hover:text-primary transition-colors">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription>{category.description}</CardDescription>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-sm font-medium text-muted-foreground">{category.count} patterns</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
