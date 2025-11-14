'use client'

import { AlertCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PlaygroundErrorPanelProps {
  errors: string[]
}

export function PlaygroundErrorPanel({ errors }: PlaygroundErrorPanelProps) {
  if (errors.length === 0) return null

  return (
    <div className="h-32 overflow-y-auto bg-destructive/5 border-t border-destructive/20 p-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 font-semibold text-destructive">
            <AlertCircle className="w-4 h-4" />
            Errors ({errors.length})
          </div>
        </div>
        {errors.map((error, idx) => (
          <div key={idx} className="text-sm text-muted-foreground font-mono bg-background p-2 rounded">
            {error}
          </div>
        ))}
      </div>
    </div>
  )
}
