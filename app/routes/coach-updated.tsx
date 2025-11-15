import React, { useState, useRef, useEffect } from "react"
import { Link, useFetcher } from "@remix-run/react"

// ==================== COACHING AI SYSTEM PROMPT ====================
// This prompt ensures the AI remembers context and asks reflective questions
const COACHING_SYSTEM_PROMPT = `You are FelixGPT, a professional life coach specializing in personal growth, leadership development, and career advancement.

CORE PRINCIPLES:
1. Help clients gain awareness and responsibility through reflection
2. Ask open-ended questions that encourage self-discovery
3. Listen actively and build on previous context
4. Avoid giving long information dumps or lectures
5. Keep responses concise and impactful (2-3 sentences max)
6. Always end with ONE reflective question

COACHING STYLE:
- Be empathetic and supportive
- Challenge gently when appropriate
- Celebrate insights and progress
- Help clients find their own answers
- Build on conversation history to show you're listening

EXAMPLE RESPONSES:
User: "I struggle with confidence at work"
You: "That's a common challenge. Confidence often comes from recognizing past wins. Can you think of a time at work when you felt truly capable and confident? What was different about that situation?"

User: "I want to advance my career"
You: "Career growth is exciting. Before we explore options, what does success look like for you in 3 years? And what's one step you could take this week toward that vision?"

Remember: Your role is to facilitate the client's own insights, not to provide advice. Ask more than you tell.`

// ==================== TYPE DEFINITIONS ====================
interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
}

// (removed unused CoachingSession interface)

type TabKey = "feed" | "manage" | "documents" | "profile" | "tracking" | "create" | "settings" | "coaching"

interface IconProps {
  readonly name: string
  readonly className?: string
}

// ==================== ICON COMPONENT ====================
function Icon({ name, className = "w-5 h-5" }: IconProps) {
  const iconProps: React.SVGProps<SVGPathElement> = {
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  }

  switch (name) {
    case "feed":
      return (
        <svg className={className} viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path {...iconProps} d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      )
    case "manage":
      return (
        <svg className={className} viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path {...iconProps} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    case "documents":
      return (
        <svg className={className} viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path {...iconProps} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    case "profile":
      return (
        <svg className={className} viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path {...iconProps} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    case "tracking":
      return (
        <svg className={className} viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path {...iconProps} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case "create":
      return (
        <svg className={className} viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path {...iconProps} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    case "settings":
      return (
        <svg className={className} viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path {...iconProps} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path {...iconProps} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    case "coaching":
      return (
        <svg className={className} viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path {...iconProps} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      )
    default:
      return <svg className={className} />
  }
}

// ==================== COACHING CHAT COMPONENT ====================
function CoachingChat() {
  const fetcher = useFetcher()
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "system",
      content: COACHING_SYSTEM_PROMPT,
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Handle fetcher response
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      const data = fetcher.data as { reply?: string; error?: string }
      if (data.reply) {
        setMessages(prev => [...prev, { role: "assistant", content: data.reply || "" }])
      }
      setLoading(false)
    }
  }, [fetcher.state, fetcher.data])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    // Add user message to state
    const userMessage: ChatMessage = { role: "user", content: input }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput("")
    setLoading(true)

    // Send to backend with full conversation history
    const formData = new FormData()
    formData.append("messages", JSON.stringify(updatedMessages))
    fetcher.submit(formData, { method: "post", action: "/api/coaching" })
  }

  // Filter out system message for display
  const displayMessages = messages.filter(m => m.role !== "system")

  return (
    <div className="flex flex-col h-full max-h-[70vh] bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {displayMessages.length === 0 ? (
          <div className="text-center text-slate-500 dark:text-slate-400 py-8">
            <p className="font-semibold mb-2">Welcome to Coaching Session</p>
            <p className="text-sm">Share what's on your mind. I'm here to help you gain clarity and take action.</p>
          </div>
        ) : (
          displayMessages.map((msg, idx) => (
            <div key={`msg-${idx}`} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-bl-none"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-900">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Share what's on your mind..."
            disabled={loading}
            className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

// ==================== MAIN COACH DASHBOARD ====================
export default function CoachDashboard() {
  const [active, setActive] = useState<TabKey>("feed")
  const [mobileOpen, setMobileOpen] = useState(false)

  const tabs: { key: TabKey; label: string; icon: string; badge?: number }[] = [
    { key: "feed", label: "Activity Feed", icon: "feed", badge: 3 },
    { key: "manage", label: "Coaching Management", icon: "manage", badge: 12 },
    { key: "documents", label: "Resources", icon: "documents" },
    { key: "profile", label: "My Profile", icon: "profile" },
    { key: "tracking", label: "Progress Tracking", icon: "tracking" },
    { key: "create", label: "Create Content", icon: "create" },
    { key: "coaching", label: "AI Coaching", icon: "coaching" },
    { key: "settings", label: "Settings", icon: "settings" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link to="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="relative">
                  <img src="/images/dolphin.svg" alt="Coachify" className="w-10 h-10 rounded-xl shadow-lg" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-800" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                    Coachify Pro
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 -mt-1">Professional Dashboard</span>
                </div>
              </Link>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className={`lg:col-span-3 ${mobileOpen ? "block" : "hidden"} lg:block`}>
            <nav className="space-y-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-2">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActive(tab.key)
                    setMobileOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    active === tab.key
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  <Icon name={tab.icon} className="w-5 h-5" />
                  <span className="flex-1 text-left">{tab.label}</span>
                  {tab.badge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{tab.badge}</span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            {active === "coaching" ? (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">AI Coaching Session</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Connect with FelixGPT for personalized coaching that remembers your journey and asks powerful questions.
                </p>
                <CoachingChat />
              </div>
            ) : active === "feed" ? (
              <ActivityFeedContent />
            ) : active === "manage" ? (
              <ManagementContent />
            ) : active === "documents" ? (
              <DocumentsContent />
            ) : active === "profile" ? (
              <ProfileContent />
            ) : active === "tracking" ? (
              <TrackingContent />
            ) : active === "create" ? (
              <CreateContent />
            ) : (
              <SettingsContent />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ==================== CONTENT COMPONENTS ====================
function ActivityFeedContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Activity Feed</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-6">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="font-semibold mb-1">Active Clients</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">42 clients this month</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 rounded-2xl p-6">
          <div className="text-3xl mb-2">✅</div>
          <h3 className="font-semibold mb-1">Goals Achieved</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">128 this quarter</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700 rounded-2xl p-6">
          <div className="text-3xl mb-2">⭐</div>
          <h3 className="font-semibold mb-1">Average Rating</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">4.9/5.0 stars</p>
        </div>
      </div>
    </div>
  )
}

function ManagementContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Coaching Management</h2>
      <p className="text-slate-600 dark:text-slate-400">Manage your coaching sessions and client relationships.</p>
    </div>
  )
}

function DocumentsContent() {
  return (
    <div className="text-center py-12 text-slate-500 dark:text-slate-400">
      <div className="text-4xl mb-2">📚</div>
      <p>Documents and resources management interface</p>
    </div>
  )
}

function ProfileContent() {
  return (
    <div className="text-center py-12 text-slate-500 dark:text-slate-400">
      <div className="text-4xl mb-2">👤</div>
      <p>Profile management interface</p>
    </div>
  )
}

function TrackingContent() {
  return (
    <div className="text-center py-12 text-slate-500 dark:text-slate-400">
      <div className="text-4xl mb-2">📈</div>
      <p>Progress tracking and analytics dashboard</p>
    </div>
  )
}

function CreateContent() {
  return (
    <div className="text-center py-12 text-slate-500 dark:text-slate-400">
      <div className="text-4xl mb-2">✨</div>
      <p>Content creation workspace</p>
    </div>
  )
}

function SettingsContent() {
  return (
    <div className="text-center py-12 text-slate-500 dark:text-slate-400">
      <div className="text-4xl mb-2">⚙️</div>
      <p>Settings configuration panel</p>
    </div>
  )
}
