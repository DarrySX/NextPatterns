'use client'

import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Heart, Zap, Flame } from 'lucide-react'

interface UserStatsProps {
  stats: {
    patterns: number
    likes: number
    contributions: number
    streak: number
  }
}

export function UserStats({ stats }: UserStatsProps) {
  const statCards = [
    {
      label: 'Patterns Created',
      value: stats.patterns,
      icon: TrendingUp,
      color: 'text-blue-500',
    },
    {
      label: 'Total Likes',
      value: stats.likes,
      icon: Heart,
      color: 'text-red-500',
    },
    {
      label: 'Contributions',
      value: stats.contributions,
      icon: Zap,
      color: 'text-yellow-500',
    },
    {
      label: 'Day Streak',
      value: stats.streak,
      icon: Flame,
      color: 'text-orange-500',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
      {statCards.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`${stat.color} opacity-20`}>
                  <Icon className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
