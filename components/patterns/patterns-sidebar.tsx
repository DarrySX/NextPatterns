'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronDown } from 'lucide-react'

const categories = [
  { id: 'routing', label: 'Routing', count: 124 },
  { id: 'data-fetching', label: 'Data Fetching', count: 98 },
  { id: 'api-routes', label: 'API Routes', count: 87 },
  { id: 'optimization', label: 'Optimization', count: 156 },
  { id: 'authentication', label: 'Authentication', count: 92 },
  { id: 'styling', label: 'Styling', count: 134 },
  { id: 'state-management', label: 'State Management', count: 76 },
  { id: 'deployment', label: 'Deployment', count: 65 },
]

const difficulty = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
]

export function PatternsSidebar({ onSelectCategory }: { onSelectCategory: () => void }) {
  const [expandedCategory, setExpandedCategory] = useState(true)
  const [expandedDifficulty, setExpandedDifficulty] = useState(true)

  return (
    <div className="p-6 space-y-8 overflow-y-auto h-full">
      {/* Categories */}
      <div>
        <button
          onClick={() => setExpandedCategory(!expandedCategory)}
          className="flex items-center justify-between w-full mb-4 font-semibold hover:text-primary transition-colors"
        >
          Categories
          <ChevronDown
            className={`w-4 h-4 transition-transform ${expandedCategory ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedCategory && (
          <nav className="space-y-2">
            <Link
              href="/patterns"
              onClick={onSelectCategory}
              className="block px-3 py-2 rounded-md text-sm hover:bg-primary/10 hover:text-primary transition-colors"
            >
              All Patterns
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/patterns?category=${category.id}`}
                onClick={onSelectCategory}
                className="flex items-center justify-between px-3 py-2 rounded-md text-sm hover:bg-primary/10 hover:text-primary transition-colors group"
              >
                <span>{category.label}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Difficulty */}
      <div>
        <button
          onClick={() => setExpandedDifficulty(!expandedDifficulty)}
          className="flex items-center justify-between w-full mb-4 font-semibold hover:text-primary transition-colors"
        >
          Difficulty
          <ChevronDown
            className={`w-4 h-4 transition-transform ${expandedDifficulty ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedDifficulty && (
          <nav className="space-y-2">
            {difficulty.map((level) => (
              <Link
                key={level.id}
                href={`/patterns?difficulty=${level.id}`}
                onClick={onSelectCategory}
                className="block px-3 py-2 rounded-md text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {level.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Sort by */}
      <div>
        <h3 className="font-semibold mb-4">Sort by</h3>
        <nav className="space-y-2">
          <Link
            href="/patterns?sort=latest"
            onClick={onSelectCategory}
            className="block px-3 py-2 rounded-md text-sm hover:bg-primary/10 hover:text-primary transition-colors"
          >
            Latest
          </Link>
          <Link
            href="/patterns?sort=popular"
            onClick={onSelectCategory}
            className="block px-3 py-2 rounded-md text-sm hover:bg-primary/10 hover:text-primary transition-colors"
          >
            Most Popular
          </Link>
          <Link
            href="/patterns?sort=trending"
            onClick={onSelectCategory}
            className="block px-3 py-2 rounded-md text-sm hover:bg-primary/10 hover:text-primary transition-colors"
          >
            Trending
          </Link>
        </nav>
      </div>
    </div>
  )
}
