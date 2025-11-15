import { useState, useRef, useEffect } from "react"
import { appendFile, mkdir } from "fs/promises"
import type { ActionArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useFetcher, useNavigate, NavLink } from "@remix-run/react"
import { 
  IconDashboard, 
  IconRobot, 
  IconArrowRight, 
  IconMessage, 
  IconLogout,
  IconSearch 
} from "@tabler/icons-react"
import Groq from "groq-sdk"
import ThemeSwitcher from "../components/ThemeSwitcher"
import { cn } from "~/utils"
import { useScreenLarge } from "~/hooks"
import { TooltipAuto, TooltipProvider } from "~/components"
import type { ReactNode } from "react"

// Enhanced system prompt for life coaching and leadership
const LIFE_COACHING_SYSTEM_PROMPT = `You are FelixGPT, an expert life coach and leadership mentor with 15+ years of experience. Your specialty is helping people achieve personal growth, career advancement, and leadership excellence.

CORE PRINCIPLES:
1. Always be empathetic, encouraging, and solution-focused
2. Ask probing questions to understand deeper needs
3. Provide actionable, step-by-step guidance
4. Focus on mindset, habits, and practical strategies
5. Help clients discover their own answers through questioning

SPECIALTIES:
- Career transitions and advancement
- Leadership development
- Work-life balance
- Confidence building
- Goal setting and achievement
- Relationship management
- Stress management and mindfulness
- Personal transformation

APPROACH:
- Start with empathy and validation
- Ask clarifying questions to understand the real challenge
- Provide structured frameworks and tools
- End with actionable next steps
- Always be supportive but honest

Remember to build on previous conversation context and help users see their situations from new perspectives.`

// Server action: call Groq API with demo mode fallback
export async function action({ request }: ActionArgs) {
  // helper to write structured logs for remote failures
  async function writeRemoteLog(obj: Record<string, any>) {
    try {
      const dir = `${process.cwd()}/logs`
      await mkdir(dir, { recursive: true })
      const path = `${dir}/felix-remote-errors.log`
      const entry = JSON.stringify({ ts: new Date().toISOString(), ...obj }) + "\n"
      await appendFile(path, entry, { encoding: "utf8" })
    } catch (e) {
      console.error("felix: failed to write remote log", e)
    }
  }
  try {
    // Accept JSON or form submissions
    const contentType = request.headers.get("content-type") || ""
    let message: string | null = null
    if (contentType.includes("application/json")) {
      const body = await request.json()
      message = (body?.message || "").toString()
    } else {
      const form = await request.formData()
      const m = form.get("message")
      message = m ? String(m) : null
    }

    if (!message) {
      return json({ error: "Message is required" }, { status: 400 })
    }

    // Try OpenAI API first (best quality for life coaching)
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY
    if (OPENAI_API_KEY) {
      console.log("felix: attempting OpenAI API call")
      try {
        const openaiResp = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { 
                role: "system", 
                content: LIFE_COACHING_SYSTEM_PROMPT
              },
              { role: "user", content: message },
            ],
            max_tokens: 1024,
            temperature: 0.7,
          }),
        })

        if (openaiResp.ok) {
          const data = await openaiResp.json()
          const reply = data?.choices?.[0]?.message?.content ?? ""
          if (reply) {
            console.log("felix: OpenAI API success", { model: "gpt-4o-mini", messageLength: message.length, replyLength: reply.length })
            await writeRemoteLog({ type: "openai_success", model: "gpt-4o-mini", messageLength: message.length, replyLength: reply.length })
            return json({ reply })
          }
        } else {
          const errText = await openaiResp.text()
          console.error("felix: OpenAI API error", { status: openaiResp.status, body: errText })
          await writeRemoteLog({ type: "openai_error", status: openaiResp.status, body: errText })
          // Fall through to Groq or demo mode
        }
      } catch (openaiErr: any) {
        console.error("felix: OpenAI API network error", { error: openaiErr?.message ?? String(openaiErr) })
        await writeRemoteLog({ type: "openai_network_error", error: openaiErr?.message ?? String(openaiErr) })
      }
    }

    // Fallback to Groq API
    const GROQ_API_KEY = process.env.GROQ_API_KEY
    if (GROQ_API_KEY) {
      console.log("felix: attempting Groq API call as fallback")
      try {
        const groq = new Groq({ apiKey: GROQ_API_KEY })

        // Try currently active Groq models (as of Nov 2025)
        const modelsToTry = [
          "llama-3.3-70b-versatile",
          "llama-3.1-8b-instant",
        ]

        let response: any = null
        let lastError: any = null

        for (const model of modelsToTry) {
          try {
            console.log(`felix: trying Groq model ${model}`)
            response = await groq.chat.completions.create({
              messages: [
                {
                  role: "system",
                  content: LIFE_COACHING_SYSTEM_PROMPT
                },
                {
                  role: "user",
                  content: message
                }
              ],
              model,
              max_tokens: 1024,
              temperature: 0.7
            })

            if (response && response.choices?.[0]?.message?.content) {
              console.log(`felix: Groq API success with model ${model}`)
              const reply = response.choices[0].message.content
              await writeRemoteLog({ type: "groq_success", model, messageLength: message.length, replyLength: reply.length })
              return json({ reply })
            }
          } catch (modelErr: any) {
            lastError = modelErr
            const errMsg = modelErr?.message ?? String(modelErr)
            console.warn(`felix: Groq model ${model} failed: ${errMsg}`)
            continue
          }
        }

        console.error("felix: all Groq models failed", { error: lastError?.message ?? String(lastError) })
        await writeRemoteLog({ type: "groq_all_models_failed", error: lastError?.message ?? String(lastError) })
      } catch (groqErr: any) {
        console.error("felix: Groq API initialization error", { error: groqErr?.message ?? String(groqErr) })
        await writeRemoteLog({ type: "groq_init_error", error: groqErr?.message ?? String(groqErr) })
      }
    } else {
      console.log("felix: GROQ_API_KEY not set, will fall back to demo mode if OpenAI fails")
    }

    // ENHANCED DEMO MODE: Life coaching specific responses
    console.warn("felix: using DEMO MODE for response", { message })
    await writeRemoteLog({ type: "demo_mode_response", message })

    const lowerMsg = message.toLowerCase()
    let demoReply = ""
    
    if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey")) {
      demoReply = `🌊 Welcome! I'm FelixGPT, your AI life coach and leadership mentor. 

I'm here to help you navigate life's challenges 

What area of your life would you like to explore today?`
    } else if (lowerMsg.includes("career") || lowerMsg.includes("job") || lowerMsg.includes("work")) {
      demoReply = `💼 Career development is such an important journey. To help you best, I'd love to understand:

• What specifically about your career feels challenging right now?
• Are you looking to advance, change paths, or find more fulfillment?
• What skills or strengths do you enjoy using most?

Tell me more about your current situation and aspirations.`
    } else if (lowerMsg.includes("leadership") || lowerMsg.includes("manager") || lowerMsg.includes("team")) {
      demoReply = `🎯 Leadership growth is a transformative journey. Great leaders are made, not born!

Could you share:
• What leadership challenge are you currently facing?
• Are you leading a team, project, or your own development?
• What kind of leader do you aspire to become?

Let's explore your leadership style and goals together.`
    } else if (lowerMsg.includes("stress") || lowerMsg.includes("overwhelm") || lowerMsg.includes("anxious")) {
      demoReply = `🧘 I understand how challenging stress can be. You're not alone in this.

To help you find balance:
• What specifically is causing the most stress right now?
• How is this affecting your daily life and wellbeing?
• What coping strategies have you tried so far?

Remember, acknowledging stress is the first step toward managing it effectively.`
    } else if (lowerMsg.includes("goal") || lowerMsg.includes("achieve") || lowerMsg.includes("success")) {
      demoReply = `🎯 Goal achievement is my specialty! Let's create a clear path forward.

Tell me about:
• What specific goal are you working toward?
• Why is this goal important to you?
• What's been holding you back so far?

I'll help you break it down into actionable steps with accountability.`
    } else if (lowerMsg.includes("confidence") || lowerMsg.includes("doubt") || lowerMsg.includes("imposter")) {
      demoReply = `🌟 Confidence building starts with self-awareness. Many successful people experience doubt.

Help me understand:
• In what situations do you feel your confidence wavering?
• What evidence contradicts these doubts?
• What would you attempt if you knew you couldn't fail?

Let's build your confidence from the inside out.`
    } else if (lowerMsg.includes("balance") || lowerMsg.includes("burnout") || lowerMsg.includes("time")) {
      demoReply = `⚖️ Work-life balance is essential for sustainable success. This is a common challenge for high-achievers.

Could you describe:
• What does your current work-life situation look like?
• What would ideal balance mean for you?
• What boundaries or changes have you considered?

Let's design a balanced lifestyle that supports your goals.`
    } else {
      // Default coaching response that asks probing questions
      demoReply = `🤔 Thank you for sharing that. As your life coach, I want to understand your situation deeply to provide the most helpful guidance.

To help you best, could you tell me more about:
• What specifically is challenging about this situation?
• How long has this been on your mind?
• What outcome are you hoping to achieve?
• What have you already tried?

The more context you provide, the better I can support your growth journey.`
    }
    return json({ reply: demoReply })
  } catch (err: any) {
    return json({ error: err?.message || String(err) }, { status: 500 })
  }
}

// Coaching topics for quick starters
const COACHING_TOPICS = [
  {
    emoji: "💼",
    title: "Career Advancement",
    question: "How can I advance in my career or find more fulfilling work?"
  },
  {
    emoji: "🎯",
    title: "Leadership Skills", 
    question: "I want to become a better leader. Where should I start?"
  },
  {
    emoji: "⚖️",
    title: "Work-Life Balance",
    question: "How can I achieve better balance between work and personal life?"
  },
  {
    emoji: "🌟",
    title: "Confidence Building",
    question: "I struggle with self-doubt. How can I build more confidence?"
  },
  {
    emoji: "🎯",
    title: "Goal Setting",
    question: "I have big goals but struggle to achieve them. Any advice?"
  },
  {
    emoji: "🧘",
    title: "Stress Management",
    question: "How can I better manage stress and overwhelm in my life?"
  }
]

export default function Felix() {
  const fetcher = useFetcher()
  const [messages, setMessages] = useState<{ id: string; role: "user" | "assistant"; text: string }[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [showTopics, setShowTopics] = useState(true)
  const [showTopicsDropdown, setShowTopicsDropdown] = useState(false)
  const endRef = useRef<HTMLDivElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [input])

  // watch for fetcher state changes and append replies when available
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      const d = fetcher.data as { reply?: string; error?: string }
      const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      const replyText = typeof d.reply === "string" ? d.reply : undefined
      const errorText = typeof d.error === "string" ? d.error : undefined
      if (replyText) {
        setMessages(prev => [...prev, { id: makeId(), role: "assistant", text: replyText }])
      } else if (errorText) {
        setMessages(prev => [...prev, { id: makeId(), role: "assistant", text: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment." }])
      }
      setLoading(false)
      // scroll into view
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 100)
    }
  }, [fetcher.state, fetcher.data])

  // Hide topics when conversation starts
  useEffect(() => {
    if (messages.length > 0) {
      setShowTopics(false)
    }
  }, [messages.length])

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    const text = input.trim()
    if (!text) return
    // append user message
    const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    setMessages(prev => [...prev, { id: makeId(), role: "user", text }])
    setInput("")
    setLoading(true)

    // send to action (same route) as form data
    const fd = new FormData()
    fd.append("message", text)
    fetcher.submit(fd, { method: "post", action: "/felix" })
  }

  function handleTopicClick(question: string) {
    setInput(question)
    // Auto-submit after a brief delay
    setTimeout(() => {
      handleSubmit()
    }, 100)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-slate-50 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10 py-8 px-0 sm:px-6 lg:px-8">
      <HeaderNavigation />
      <div className="w-full sm:max-w-4xl sm:mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <BackButton />
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
                  FelixGPT
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Your AI Life Coach & Leadership Mentor
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
          </div>
        </div>

        {/* Main Chat Container */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-none sm:rounded-3xl shadow-lg sm:shadow-2xl border-0 sm:border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
          {/* Chat Header */}
          <div className="border-b border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-blue-900/20 px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-900 dark:text-white">Life Coaching Session</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {messages.length === 0 ? "Ready to transform your life?" : `${messages.length / 2} messages exchanged`}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <div className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`} />
                {loading ? 'Thinking...' : 'Online'}
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Button - Only on sm and below */}
          {messages.length === 0 && showTopics && (
            <div className="sm:hidden border-b border-slate-200/50 dark:border-slate-700/50 px-4 py-3 bg-slate-50/30 dark:bg-slate-800/20">
              <button
                onClick={() => setShowTopicsDropdown(!showTopicsDropdown)}
                className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 text-slate-900 dark:text-white font-medium"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
                  </svg>
                  <span>Coaching Topics</span>
                </div>
                <svg className={`w-5 h-5 transition-transform duration-300 ${showTopicsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showTopicsDropdown && (
                <div className="mt-3 grid grid-cols-1 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {COACHING_TOPICS.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleTopicClick(topic.question)
                        setShowTopicsDropdown(false)
                      }}
                      className="group text-left p-3 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{topic.emoji}</span>
                        <div className="flex-1 text-left">
                          <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                            {topic.title}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                            {topic.question}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Chat Messages */}
          <div className="flex flex-col gap-6 max-h-[60vh] overflow-auto px-4 sm:px-6 py-6 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600">
            {messages.length === 0 && showTopics && (
              <div className="space-y-6">
                {/* Welcome Message */}
                <div className="flex flex-col items-start">
                  <div className="max-w-[85%] bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 border border-blue-200/50 dark:border-blue-700/50 rounded-2xl rounded-bl-none px-6 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">F</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Welcome to FelixGPT! 🌊</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Your AI Life Coach</p>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      I'm ready to support your journey.
                    </p>
                  </div>
                </div>

                {/* Coaching Topics Grid - Hidden on mobile, visible on sm and above */}
                <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {COACHING_TOPICS.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => handleTopicClick(topic.question)}
                      className="group text-left p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {topic.emoji}
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {topic.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                        {topic.question}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Conversation Messages */}
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    m.role === "user" 
                      ? "bg-gradient-to-br from-emerald-500 to-teal-600" 
                      : "bg-gradient-to-br from-blue-500 to-emerald-500"
                  }`}>
                    {m.role === "user" ? (
                      <span className="text-white font-bold text-sm">Y</span>
                    ) : (
                      <span className="text-white font-bold text-sm">F</span>
                    )}
                  </div>
                  
                  {/* Message Bubble */}
                  <div className={`flex-1 min-w-0 ${
                    m.role === "user" 
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl rounded-br-none" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl rounded-bl-none border border-slate-200/50 dark:border-slate-700/50"
                  } px-4 py-3 shadow-sm`}>
                    <div className="whitespace-pre-wrap leading-relaxed">{m.text}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 border border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                      </div>
                      <span className="text-sm">Thinking deeply about your situation...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={endRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-200/50 dark:border-slate-700/50 px-4 sm:px-6 py-4 bg-slate-50/50 dark:bg-slate-800/30">
            <form onSubmit={handleSubmit} className="flex gap-3 items-end">
              <div className="flex-1 relative">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Share what's on your mind... (Press Enter to send, Shift+Enter for new line)"
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 resize-none min-h-[60px] max-h-[120px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 scrollbar-thin"
                  disabled={loading}
                  rows={1}
                />
              </div>
              <button 
                type="submit" 
                disabled={loading || !input.trim()}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm">Thinking</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm">Send</span>
                  </>
                )}
              </button>
            </form>
            
            {/* Footer Note */}
            <div className="mt-3 text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                FelixGPT may makes mistakes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BackButton() {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(-1)}
      className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all duration-200 text-slate-700 dark:text-slate-200"
      title="Go back"
      aria-label="Go back"
    >
      <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-6 7-6" />
      </svg>
      <span className="text-sm font-medium">Back</span>
    </button>
  )
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