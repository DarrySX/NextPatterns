'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserPatterns } from '@/components/profile/user-patterns'
import { UserStats } from '@/components/profile/user-stats'
import { UserActivity } from '@/components/profile/user-activity'
import { Mail, MapPin, LinkIcon, Calendar, MessageSquare, Share2, MoreVertical } from 'lucide-react'

export default function ProfilePage({ params }: { params: { username: string } }) {
  const [isFollowing, setIsFollowing] = useState(false)

  const profile = {
    username: params.username,
    name: 'Alex Developer',
    email: 'alex@example.com',
    avatar: '/placeholder.svg?key=profile1',
    bio: 'Full-stack developer obsessed with Next.js and React. Coffee enthusiast ☕',
    location: 'San Francisco, CA',
    website: 'alexdev.com',
    joinedDate: 'January 2024',
    followers: 1240,
    following: 456,
    stats: {
      patterns: 42,
      likes: 2890,
      contributions: 156,
      streak: 12,
    },
    badges: [
      { id: 'contributor', label: 'Top Contributor', color: 'bg-yellow-500' },
      { id: 'helpful', label: 'Helpful Member', color: 'bg-blue-500' },
      { id: 'expert', label: 'Next.js Expert', color: 'bg-purple-500' },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image */}
      <div className="h-40 bg-gradient-to-r from-primary/20 to-accent/20" />

      <div className="max-w-6xl mx-auto px-4 pb-12">
        {/* Profile Header */}
        <div className="relative -mt-20 mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex gap-4 items-end">
              <Avatar className="w-32 h-32 border-4 border-background">
                <AvatarImage src={profile.avatar || '/placeholder.svg'} />
                <AvatarFallback className="text-2xl font-bold">
                  {profile.name[0]}
                </AvatarFallback>
              </Avatar>

              <div className="mb-2">
                <h1 className="text-3xl font-bold">{profile.name}</h1>
                <p className="text-muted-foreground">@{profile.username}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant={isFollowing ? 'default' : 'outline'}
                onClick={() => setIsFollowing(!isFollowing)}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
              <Button variant="outline" size="icon">
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Bio and Info */}
          <div className="mt-6 space-y-3">
            <p className="text-lg text-foreground">{profile.bio}</p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {profile.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {profile.location}
                </div>
              )}
              {profile.website && (
                <a href={`https://${profile.website}`} className="flex items-center gap-1 hover:text-primary">
                  <LinkIcon className="w-4 h-4" />
                  {profile.website}
                </a>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Joined {profile.joinedDate}
              </div>
            </div>

            {/* Social Stats */}
            <div className="flex gap-6 pt-2">
              <div>
                <span className="font-semibold">{profile.followers.toLocaleString()}</span>
                <span className="text-muted-foreground ml-1">Followers</span>
              </div>
              <div>
                <span className="font-semibold">{profile.following.toLocaleString()}</span>
                <span className="text-muted-foreground ml-1">Following</span>
              </div>
            </div>

            {/* Badges */}
            {profile.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {profile.badges.map((badge) => (
                  <Badge key={badge.id} className={`${badge.color} text-white`}>
                    {badge.label}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <UserStats stats={profile.stats} />

        {/* Content Tabs */}
        <Tabs defaultValue="patterns" className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="patterns">
              Patterns ({profile.stats.patterns})
            </TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          </TabsList>

          <TabsContent value="patterns" className="mt-6">
            <UserPatterns patterns={profile.stats.patterns} />
          </TabsContent>

          <TabsContent value="activity" className="mt-6">
            <UserActivity />
          </TabsContent>

          <TabsContent value="bookmarks" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Patterns</CardTitle>
                <CardDescription>Patterns you've bookmarked for later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <p>No bookmarks yet. Start saving patterns you find useful!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
