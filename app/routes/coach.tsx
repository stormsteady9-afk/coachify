import React, { useState, useRef, useEffect } from "react"
import { Link, useFetcher, NavLink, useNavigate } from "@remix-run/react"
import {
  IconDashboard,
  IconRobot,
  IconArrowRight,
  IconMessage,
  IconLogout,
  IconSearch,
} from "@tabler/icons-react"
import type { ReactNode } from "react"
import { cn } from "~/utils"
import { useScreenLarge } from "~/hooks"
import { TooltipAuto, TooltipProvider } from "~/components"

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

type TabKey = "feed" | "manage" | "documents" | "profile" | "tracking" | "create" | "settings" | "coaching"

interface IconProps {
  readonly name: string
  readonly className?: string
}

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
  const STORAGE_KEY = "felixgpt_chat_v1"

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "system",
      content: COACHING_SYSTEM_PROMPT,
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Load persisted messages from localStorage on mount (client-side only)
  useEffect(() => {
    try {
      if ((globalThis as any).localStorage === undefined) return
      const raw = (globalThis as any).localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as ChatMessage[]
        // Ensure system prompt is present as the first message
        if (parsed.length > 0 && parsed[0]?.role === "system") {
          setMessages(parsed)
        } else {
          setMessages(prev => [{ role: "system", content: COACHING_SYSTEM_PROMPT }, ...parsed])
        }
      }
    } catch (err) {
      // ignore localStorage errors
      console.warn("Failed to load saved chat:", err)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Persist messages to localStorage whenever they change
  useEffect(() => {
    try {
      if ((globalThis as any).localStorage === undefined) return
      // Only persist non-empty arrays
      if (messages && messages.length > 0) {
        ;(globalThis as any).localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
      }
    } catch (err) {
      console.warn("Failed to save chat:", err)
    }
  }, [messages])

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

  const clearConversation = () => {
    const initial: ChatMessage[] = [{ role: "system", content: COACHING_SYSTEM_PROMPT }]
    setMessages(initial)
    try {
      if ((globalThis as any).localStorage !== undefined) (globalThis as any).localStorage.removeItem(STORAGE_KEY)
    } catch (err) {
      console.warn("Failed to clear saved chat:", err)
    }
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
            <div key={`message-${idx}-${msg.role}`} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
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
          <button
            type="button"
            onClick={clearConversation}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  )
}

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
      <HeaderNavigation />
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

            <div className="flex items-center gap-4">
              {/* Search Bar - Desktop */}
              <div className="hidden md:block relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search clients, sessions..."
                  className="pl-10 pr-4 py-2 w-64 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="hidden sm:flex items-center gap-2">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200">
                  New Session
                </button>
                <button className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors relative">
                  <svg className="w-5 h-5 text-slate-600 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    5
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="sm:hidden p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
                onClick={() => setMobileOpen(v => !v)}
                aria-label="Open menu"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar for desktop */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 sticky top-24">
              <nav className="space-y-1">
                {tabs.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActive(tab.key)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                      active === tab.key 
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-700 shadow-sm" 
                        : "hover:bg-slate-50 dark:hover:bg-slate-700/50"
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-colors ${
                      active === tab.key 
                        ? "bg-blue-500 text-white" 
                        : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30"
                    }`}>
                      <Icon name={tab.icon} className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`font-medium text-sm ${
                        active === tab.key ? "text-blue-700 dark:text-blue-300" : "text-slate-700 dark:text-slate-200"
                      }`}>
                        {tab.label}
                      </span>
                    </div>
                    {tab.badge && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        active === tab.key 
                          ? "bg-blue-500 text-white" 
                          : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"
                      }`}>
                        {tab.badge}
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              {/* User Profile Card */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                  <img 
                    src="/images/avatar-placeholder.png" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-600 shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Dr. Sarah Johnson</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Executive Coach</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile menu overlay */}
          {mobileOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
              <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-slate-800 shadow-2xl border-l border-slate-200 dark:border-slate-700">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Navigation</h3>
                    <button 
                      onClick={() => setMobileOpen(false)}
                      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <nav className="space-y-1">
                    {tabs.map(tab => (
                      <button
                        key={tab.key}
                        onClick={() => { setActive(tab.key); setMobileOpen(false) }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                          active === tab.key 
                            ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700" 
                            : "hover:bg-slate-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        <Icon name={tab.icon} className={`w-5 h-5 ${
                          active === tab.key ? "text-blue-600" : "text-slate-500"
                        }`} />
                        <span className={`font-medium ${
                          active === tab.key ? "text-blue-700" : "text-slate-700 dark:text-slate-200"
                        }`}>
                          {tab.label}
                        </span>
                        {tab.badge && (
                          <span className={`ml-auto px-2 py-1 rounded-full text-xs ${
                            active === tab.key ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-600"
                          }`}>
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <main className="lg:col-span-9 xl:col-span-10">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Content Header */}
              <div className="border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-700/50 px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {tabs.find(t => t.key === active)?.label}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      {active === "feed" && "Latest updates and activities from your coaching network"}
                      {active === "manage" && "Manage your clients, sessions, and coaching relationships"}
                      {active === "documents" && "Your coaching resources, templates, and materials"}
                      {active === "profile" && "Manage your professional profile and availability"}
                      {active === "tracking" && "Track client progress and coaching outcomes"}
                      {active === "create" && "Create engaging content for your audience"}
                      {active === "coaching" && "Connect with FelixGPT for personalized coaching sessions"}
                      {active === "settings" && "Configure your account and preferences"}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2">
                      <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium">
                        Export
                      </button>
                      <button className="px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors font-medium">
                        New Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                {active === "feed" && <ActivityFeedContent />}
                {active === "manage" && <ManagementContent />}
                {active === "documents" && <DocumentsContent />}
                {active === "profile" && <ProfileContent />}
                {active === "tracking" && <TrackingContent />}
                {active === "create" && <CreateContent />}
                {active === "coaching" && <CoachingChat />}
                {active === "settings" && <SettingsContent />}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

// Content Components
function ActivityFeedContent() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Icon name="manage" className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">New Sessions</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">Scheduled for this week</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500 rounded-lg">
              <Icon name="tracking" className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Progress Rate</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">87%</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">Client goal achievement</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Icon name="documents" className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Resources</h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">24</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">Available materials</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 p-6">
        <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={`activity-${i}`} className="flex items-start gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-600/50 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="profile" className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 dark:text-white">
                  <span className="font-medium">Michael Chen</span> completed their leadership assessment
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">2 hours ago</p>
              </div>
              <button className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 rounded-lg transition-colors">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ManagementContent() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 p-6">
          <h3 className="font-semibold text-lg mb-4">Active Clients</h3>
          <div className="space-y-3">
            {['Sarah Wilson', 'James Rodriguez', 'Emma Thompson', 'Alex Kim'].map((name) => (
              <div key={name} className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-600/50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-white">{name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Next session: Tomorrow</p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 p-6">
          <h3 className="font-semibold text-lg mb-4">Upcoming Sessions</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-slate-900 dark:text-white">Strategy Session</span>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">1h</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">With Sarah Wilson</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Today, 2:00 PM • Video Call</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DocumentsContent() {
  return <div className="text-center py-12 text-slate-500 dark:text-slate-400">Documents management interface</div>
}

function ProfileContent() {
  return <div className="text-center py-12 text-slate-500 dark:text-slate-400">Profile management interface</div>
}

function TrackingContent() {
  return <div className="text-center py-12 text-slate-500 dark:text-slate-400">Progress tracking dashboard</div>
}

function CreateContent() {
  return <div className="text-center py-12 text-slate-500 dark:text-slate-400">Content creation workspace</div>
}

function SettingsContent() {
  return <div className="text-center py-12 text-slate-500 dark:text-slate-400">Settings configuration panel</div>
}

// Navigation menu component (from header-navigation.tsx)
type NavItem = {
  to: string
  text: string
  icon: ReactNode
  action?: () => void
}

function HeaderNavigation() {
  const navigate = useNavigate()

  const handleFeedback = () => {
    window.open('/feedback', '_blank', 'width=600,height=700')
  }

  const handleQuit = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'about:blank'
      window.close()
      setTimeout(() => navigate('/'), 100)
    }
  }

  const navMainItems: NavItem[] = [
    { 
      to: "/", 
      text: "Dashboard", 
      icon: <IconDashboard className="icon" /> 
    },
    { 
      to: "/felix", 
      text: "Chat with AI Coach", 
      icon: <IconRobot className="icon" /> 
    },
    { 
      to: "/search", 
      text: "Search", 
      icon: <IconSearch className="icon" /> 
    },
    { 
      to: "/signup-choice", 
      text: "Continue to Coachify Platform", 
      icon: <IconArrowRight className="icon" /> 
    },
  ]

  const actionItems: NavItem[] = [
    {
      to: "#",
      text: "Feedback",
      icon: <IconMessage className="icon" />,
      action: handleFeedback
    },
    {
      to: "#",
      text: "Quit",
      icon: <IconLogout className="icon" />,
      action: handleQuit
    }
  ]

  return (
    <header
      className={cn(
        "z-10 select-none",
        "border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950",
        "fixed bottom-0 left-0 flex w-full items-center justify-center border-t-2",
        "lg:top-0 lg:h-screen lg:w-16 lg:border-r-2 lg:border-t-0",
      )}
    >
      <nav className="w-full max-w-sm">
        <TooltipProvider delayDuration={500}>
          <ul className="flex justify-between gap-0 p-2 sm:gap-2 lg:flex-col">
            <NavigationList navItems={navMainItems} />
            <NavigationList navItems={actionItems} />
          </ul>
        </TooltipProvider>
      </nav>
    </header>
  )
}

function NavigationList({ navItems }: { navItems: NavItem[] }) {
  const isScreenLarge = useScreenLarge()

  return (
    <>
      {navItems.map(navItem => {
        return (
          <li key={navItem.text}>
            <TooltipAuto
              content={navItem.text}
              className="hidden lg:block"
              side={isScreenLarge ? "right" : "top"}
            >
              {navItem.action ? (
                <button
                  onClick={navItem.action}
                  className={cn(
                    "grid place-content-center gap-2 rounded-md p-2",
                    "font-medium transition-colors duration-200 w-full",
                    "text-stone-600 dark:text-stone-400",
                    "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800/50 dark:hover:text-stone-100",
                    navItem.text === "Quit" && 
                      "hover:bg-red-100 hover:text-red-900 dark:hover:bg-red-900/50 dark:hover:text-red-100"
                  )}
                >
                  {navItem.icon}
                </button>
              ) : (
                <NavLink
                  to={navItem.to}
                  className={({ isActive }) => {
                    return cn(
                      "grid place-content-center gap-2 rounded-md p-2",
                      "font-medium transition-colors duration-200",
                      "text-stone-600 dark:text-stone-400",
                      isActive
                        ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-900/70"
                        : "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800/50 dark:hover:text-stone-100",
                    )
                  }}
                >
                  {navItem.icon}
                </NavLink>
              )}
            </TooltipAuto>
          </li>
        )
      })}
    </>
  )
}