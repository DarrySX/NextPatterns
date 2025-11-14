'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Send, Loader2, Code2, Sparkles, X } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface AISidebarProps {
  isOpen: boolean
  onClose: () => void
  currentCode?: string
}

export function AISidebar({ isOpen, onClose, currentCode }: AISidebarProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant. I can help you with code analysis, optimization suggestions, and answers about Next.js patterns. What would you like help with?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      let analysisPrompt = input
      if (selectedAction && currentCode) {
        const actionMsgs = {
          analyze: `Please analyze this code:\n\`\`\`\n${currentCode}\n\`\`\`\n\n${input}`,
          optimize: `Please optimize this code:\n\`\`\`\n${currentCode}\n\`\`\`\n\n${input}`,
          explain: `Please explain this code:\n\`\`\`\n${currentCode}\n\`\`\`\n\n${input}`,
        }
        analysisPrompt = actionMsgs[selectedAction as keyof typeof actionMsgs] || input
      }

      // Simulate AI response with streaming-like effect
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I'd be happy to help! Based on your question about "${input.substring(0, 50)}...", here are some insights:\n\n• **Performance**: Consider using server components for better optimization\n• **Best Practices**: Follow Next.js patterns for routing and data fetching\n• **Code Quality**: Ensure proper TypeScript typing and error handling\n\nWould you like me to provide more specific suggestions or generate code examples?`,
        timestamp: new Date(),
      }

      setTimeout(() => {
        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
        setSelectedAction(null)
      }, 1000)
    } catch (error) {
      console.error('Error sending message:', error)
      setIsLoading(false)
    }
  }

  const quickActions = [
    {
      id: 'analyze',
      label: 'Analyze Code',
      icon: Code2,
      description: 'Get insights about the current code',
    },
    {
      id: 'optimize',
      label: 'Optimize',
      icon: Sparkles,
      description: 'Suggestions for optimization',
    },
    {
      id: 'explain',
      label: 'Explain',
      icon: Code2,
      description: 'Detailed code explanation',
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed right-0 top-16 bottom-0 w-96 bg-card border-l border-border z-40 flex flex-col shadow-lg">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
            AI
          </div>
          <div>
            <h3 className="font-semibold text-sm">AI Assistant</h3>
            <p className="text-xs text-muted-foreground">Always here to help</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="w-8 h-8"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.role === 'assistant' && (
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                  AI
                </AvatarFallback>
              </Avatar>
            )}
            <Card
              className={`max-w-xs px-4 py-2 ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              <p
                className={`text-xs mt-1 ${
                  message.role === 'user'
                    ? 'text-primary-foreground/70'
                    : 'text-muted-foreground'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </Card>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                AI
              </AvatarFallback>
            </Avatar>
            <Card className="bg-muted px-4 py-3">
              <Loader2 className="w-4 h-4 animate-spin" />
            </Card>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      {messages.length === 1 && currentCode && (
        <div className="px-4 py-3 border-t border-border space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Quick actions:</p>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Button
                  key={action.id}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedAction(action.id)
                    setInput(action.description)
                  }}
                  className="text-xs justify-start h-auto"
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {action.label}
                </Button>
              )
            })}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-border space-y-3">
        <div className="flex gap-2">
          <Textarea
            placeholder="Ask me anything about Next.js..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
            className="resize-none min-h-10 max-h-20"
          />
          <Button
            size="sm"
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 p-0 flex-shrink-0"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Shift + Enter for new line
        </p>
      </div>
    </div>
  )
}
