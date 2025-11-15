import React from "react"
import ThemeSwitcher from "../components/ThemeSwitcher"
import { json } from "@remix-run/node"
import type { ActionArgs } from "@remix-run/node"
import { Form, Link, useActionData, useNavigation, NavLink, useNavigate } from "@remix-run/react"
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

type ActionData = { ok: boolean; error?: string; message?: string }

export async function action({ request }: ActionArgs) {
  // Only POST requests are allowed for form submission
  if (request.method !== "POST") {
    return json({ ok: false, error: "Method not allowed" }, { status: 405 })
  }

  try {
    const form = await request.formData()
    const email = String(form.get("email") || "").trim()
    const password = String(form.get("password") || "")
    const confirm = String(form.get("confirm") || "")

    // Validation
    if (!email || !password) {
      return json({ ok: false, error: "Email and password are required" }, { status: 400 })
    }
    if (password !== confirm) {
      return json({ ok: false, error: "Passwords do not match" }, { status: 400 })
    }

    // Note: Password hashing and database user creation will be implemented in the next phase
    return json({ ok: true, message: "Coachee account signup received! You can now explore mentors and book sessions." })
  } catch (err: any) {
    return json({ ok: false, error: String(err) }, { status: 500 })
  }
}

export default function CoacheeSignup() {
  const data = useActionData<ActionData>()
  const navigation = useNavigation()
  const submitting = navigation.state !== "idle"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Prevent form submission for testing
    console.log("Form submission disabled for thesis testing")
    alert("Signup functionality is disabled for thesis testing. Use the 'Skip for Testing' button to continue.")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-emerald-200/20 dark:from-blue-800/10 dark:to-emerald-800/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-200/20 to-blue-200/20 dark:from-emerald-800/10 dark:to-blue-800/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative">
            <header className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img src="/images/dolphin.svg" alt="Coachify" className="w-12 h-12 rounded-2xl shadow-lg" />
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                      Coachee Registration
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      Start your growth journey with expert mentors
                    </p>
                  </div>
                </div>
                <ThemeSwitcher />
              </div>

              {/* Navigation */}
              <Link 
                to="/signup" 
                className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors group mb-4"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to account types
              </Link>
            </header>

            {/* Thesis Testing Banner */}
            <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 text-sm">
                    Thesis Testing Mode
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300 text-xs mt-1">
                    Signup functionality is disabled. Use the skip button below to continue testing the application.
                  </p>
                </div>
              </div>
            </div>

            <Form method="post" className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Email address
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="your@email.com" 
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={true}
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Password
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required 
                    minLength={8} 
                    placeholder="At least 8 characters" 
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={true}
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirm" className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Confirm password
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input 
                    id="confirm" 
                    name="confirm" 
                    type="password" 
                    required 
                    minLength={8} 
                    placeholder="Re-enter your password" 
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={true}
                  />
                </div>
              </div>

              {/* Status Messages */}
              {data?.error && (
                <div className="rounded-xl bg-red-50 dark:bg-red-900/20 p-4 border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">{data.error}</p>
                  </div>
                </div>
              )}
              
              {data?.ok && data.message && (
                <div className="rounded-xl bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">{data.message}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-4 pt-6">
                {/* Disabled Signup Button */}
                <button 
                  type="submit" 
                  disabled={true}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 cursor-not-allowed text-white font-semibold shadow-lg opacity-60 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Signup Disabled (Thesis Testing)
                </button>

                {/* Prominent Skip Button */}
                <Link 
                  to="/coachee" 
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Skip for Testing - Continue to Dashboard
                </Link>

                {/* Alternative Skip Option */}
                <div className="text-center">
                  <Link 
                    to="/coachee" 
                    className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                  >
                    Or skip directly to dashboard
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Form>

            <footer className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-4">
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors">
                  Sign in here
                </Link>
              </p>
              <p className="text-slate-400 dark:text-slate-500 text-xs">
                By creating an account you agree to our{" "}
                <Link to="/terms" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
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