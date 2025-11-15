import React, { useState } from "react"
import { json } from "@remix-run/node"
import type { ActionArgs } from "@remix-run/node"
import { Form, useActionData, useNavigation, Link, useNavigate } from "@remix-run/react"
import ThemeSwitcher from "../components/ThemeSwitcher"
import {
  IconMail,
  IconPhone,
  IconX,
  IconCheck,
  IconArrowLeft,
  IconBrandWhatsapp,
  IconDashboard,
  IconRobot,
  IconArrowRight,
  IconMessage,
  IconLogout,
} from "@tabler/icons-react"
import type { ReactNode } from "react"
import { cn } from "~/utils"
import { useScreenLarge } from "~/hooks"
import { TooltipAuto, TooltipProvider } from "~/components"

type ActionData = { ok: boolean; error?: string; message?: string }

export async function action({ request }: ActionArgs) {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Method not allowed" }, { status: 405 })
  }

  try {
    const form = await request.formData()
    const name = String(form.get("name") || "").trim()
    const email = String(form.get("email") || "").trim()
    const subject = String(form.get("subject") || "").trim()
    const message = String(form.get("message") || "").trim()

    // Validation
    if (!name || !email || !subject || !message) {
      return json({ ok: false, error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return json({ ok: false, error: "Please enter a valid email address" }, { status: 400 })
    }

    // Here you would typically send the email using a service like Nodemailer, SendGrid, etc.
    // For now, we'll just log it and save to a file
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { writeFile, mkdir } = require("node:fs/promises")
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const path = require("node:path")

      const feedbackDir = path.join(process.cwd(), "logs", "feedback")
      await mkdir(feedbackDir, { recursive: true })

      const timestamp = new Date().toISOString()
      const fileName = `feedback-${Date.now()}.json`
      const filePath = path.join(feedbackDir, fileName)

      const feedbackData = {
        timestamp,
        name,
        email,
        subject,
        message,
      }

      await writeFile(filePath, JSON.stringify(feedbackData, null, 2), { encoding: "utf8" })

      // TODO: Send email to kwitondafelix6@gmail.com using Nodemailer or similar service
      console.log("Feedback received:", { name, email, subject, message })

      return json({
        ok: true,
        message: `Thank you ${name}! Your feedback has been received. We'll get back to you shortly at ${email}.`,
      })
    } catch (fileErr) {
      console.error("Error saving feedback:", fileErr)
      return json({
        ok: true,
        message: `Thank you ${name}! Your feedback has been received. We'll get back to you shortly at ${email}.`,
      })
    }
  } catch (err: any) {
    return json({ ok: false, error: String(err) }, { status: 500 })
  }
}

export default function FeedbackPage() {
  const data = useActionData<ActionData>()
  const navigation = useNavigation()
  const submitting = navigation.state !== "idle"
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    if (submitting) {
      e.preventDefault()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10">
      <HeaderNavigation />
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <IconArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <ThemeSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Header Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="mb-4">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Get in Touch
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/10 dark:to-blue-900/10 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">
                Contact Methods
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:kwitondafelix6@gmail.com"
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <IconMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Email
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 break-all group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      kwitondafelix6@gmail.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/821021597173?text=Hi%20Felix%2C%20I%20have%20feedback%20for%20you..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <IconBrandWhatsapp className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      WhatsApp
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      +82 10 2159 7173
                    </p>
                  </div>
                </a>

                {/* Response Time */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/50 dark:bg-slate-800/50">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Response Time
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Send us Your Feedback
              </h2>

              {/* Success Message */}
              {data?.ok && data.message && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-200">
                      Feedback Sent!
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      {data.message}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {data?.error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconX className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-red-800 dark:text-red-200">
                      Error
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                      {data.error}
                    </p>
                  </div>
                </div>
              )}

              <Form method="post" className="space-y-5" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us your thoughts, suggestions, or report an issue..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <IconMail className="w-5 h-5" />
                        Send Feedback
                      </>
                    )}
                  </button>
                </div>

                {/* Helper Text */}
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  We respect your privacy. Your feedback helps us improve our service.
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Navigation menu component
type NavItem = {
  to: string
  text: string
  icon: ReactNode
  action?: () => void
}

function HeaderNavigation() {
  const navigate = useNavigate()
  const isScreenLarge = useScreenLarge()

  const handleFeedback = () => {
    console.log("Feedback clicked")
  }

  const handleQuit = () => {
    navigate("/")
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
            <NavigationList navItems={navMainItems} isScreenLarge={isScreenLarge} />
            <NavigationList navItems={actionItems} isScreenLarge={isScreenLarge} />
          </ul>
        </TooltipProvider>
      </nav>
    </header>
  )
}

function NavigationList({ navItems, isScreenLarge }: { navItems: NavItem[]; isScreenLarge: boolean }) {

  return (
    <div className="flex lg:flex-col gap-0 sm:gap-2">
      {navItems.map(navItem => {
        const classes = cn(
          "inline-flex lg:flex items-center justify-center lg:justify-start",
          "gap-0 lg:gap-3 px-2 sm:px-4 lg:px-4 py-2 sm:py-3 lg:py-3",
          "rounded-lg text-xs sm:text-sm font-medium",
          "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800",
          "transition-all duration-200",
        )

        if (navItem.action) {
          return (
            <li key={navItem.text}>
              <TooltipAuto text={navItem.text} side={isScreenLarge ? "right" : "top"}>
                <button
                  onClick={navItem.action}
                  className={classes}
                >
                  {navItem.icon}
                  <span className="hidden lg:inline">{navItem.text}</span>
                </button>
              </TooltipAuto>
            </li>
          )
        }

        return (
          <li key={navItem.text}>
            <TooltipAuto text={navItem.text} side={isScreenLarge ? "right" : "top"}>
              <Link
                to={navItem.to}
                className={classes}
              >
                {navItem.icon}
                <span className="hidden lg:inline">{navItem.text}</span>
              </Link>
            </TooltipAuto>
          </li>
        )
      })}
    </div>
  )
}
