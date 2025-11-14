'use client'

import { useState } from 'react'
import { PatternsLayout } from '@/components/patterns/patterns-layout'
import { PatternGrid } from '@/components/patterns/pattern-grid'
import { PatternsSearch } from '@/components/patterns/patterns-search'

export default function PatternsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <PatternsLayout>
      <div className="space-y-6">
        <PatternsSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <PatternGrid
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          viewMode={viewMode}
        />
      </div>
    </PatternsLayout>
  )
}
