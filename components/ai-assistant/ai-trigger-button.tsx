'use client'

import { Button } from '@/components/ui/button'
import { Sparkles, MessageSquare } from 'lucide-react'

interface AITriggerButtonProps {
  onClick: () => void
  isOpen: boolean
  unreadCount?: number
}

export function AITriggerButton({
  onClick,
  isOpen,
  unreadCount,
}: AITriggerButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={isOpen ? 'default' : 'outline'}
      size="lg"
      className="gap-2 relative"
    >
      {isOpen ? (
        <>
          <Sparkles className="w-5 h-5" />
          Assistant Open
        </>
      ) : (
        <>
          <MessageSquare className="w-5 h-5" />
          Ask AI
          {unreadCount && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full text-xs flex items-center justify-center text-accent-foreground">
              {unreadCount}
            </span>
          )}
        </>
      )}
    </Button>
  )
}
