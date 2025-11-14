'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Grid3x3, List } from 'lucide-react'

interface PatternsSearchProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
}

export function PatternsSearch({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
}: PatternsSearchProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search patterns..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex items-center gap-2 bg-muted p-1 rounded-lg">
        <Button
          variant={viewMode === 'grid' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('grid')}
          className="w-10 h-10 p-0"
        >
          <Grid3x3 className="w-4 h-4" />
        </Button>
        <Button
          variant={viewMode === 'list' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('list')}
          className="w-10 h-10 p-0"
        >
          <List className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
