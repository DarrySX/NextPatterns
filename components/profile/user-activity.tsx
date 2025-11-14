'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, MessageSquare, BookmarkPlus } from 'lucide-react'

const activities = [
  {
    id: '1',
    type: 'like',
    action: 'Liked',
    target: 'Dynamic Routes with Nested Layouts',
    date: 'Today at 2:30 PM',
    icon: Heart,
  },
  {
    id: '2',
    type: 'comment',
    action: 'Commented on',
    target: 'Server Actions with Validation',
    date: 'Yesterday at 5:15 PM',
    icon: MessageSquare,
  },
  {
    id: '3',
    type: 'bookmark',
    action: 'Bookmarked',
    target: 'Image Optimization with Next/Image',
    date: '2 days ago',
    icon: BookmarkPlus,
  },
  {
    id: '4',
    type: 'like',
    action: 'Liked',
    target: 'Real-time Data with Streaming',
    date: '3 days ago',
    icon: Heart,
  },
]

export function UserActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your recent interactions on the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-semibold">{activity.action}</span>
                    {' '}
                    <span className="text-muted-foreground">
                      "{activity.target}"
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
