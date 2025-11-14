'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart, Reply } from 'lucide-react'

interface PatternCommentsProps {
  patternId: string
  initialComments: number
}

const mockComments = [
  {
    id: '1',
    author: 'Sarah Code',
    avatar: '/diverse-group-avatars.png',
    content: 'This pattern is really helpful! I used it in my project and it simplified the navigation significantly.',
    likes: 12,
    replies: 2,
    createdAt: '2 days ago',
  },
  {
    id: '2',
    author: 'Mike Builder',
    avatar: '/pandoran-bioluminescent-forest.png',
    content: 'Great explanation of nested layouts. Would be great to see an example with error boundaries.',
    likes: 8,
    replies: 1,
    createdAt: '1 day ago',
  },
]

export function PatternComments({
  patternId,
  initialComments,
}: PatternCommentsProps) {
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!newComment.trim()) return
    setIsSubmitting(true)
    // TODO: Submit comment to API
    setTimeout(() => {
      setNewComment('')
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      {/* New comment form */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Add a comment</h3>
            <Textarea
              placeholder="Share your thoughts, questions, or improvements..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-24"
            />
            <Button
              onClick={handleSubmit}
              disabled={!newComment.trim() || isSubmitting}
            >
              {isSubmitting ? 'Posting...' : 'Post comment'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comments list */}
      <div className="space-y-4">
        <h3 className="font-semibold">{initialComments} Comments</h3>
        {mockComments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold">{comment.author}</p>
                      <p className="text-xs text-muted-foreground">{comment.createdAt}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{comment.content}</p>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Heart className="w-4 h-4" />
                      {comment.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Reply className="w-4 h-4" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
