import React, { useState } from "react"
import { Link, NavLink, useNavigate } from "@remix-run/react"
import {
  IconDashboard,
  IconRobot,
  IconArrowRight,
  IconMessage,
  IconLogout,
  IconSearch,
} from "@tabler/icons-react"
import type { ReactNode } from "react"
import ThemeSwitcher from "../components/ThemeSwitcher"
import CoachSignup from "./signup.coach"
import CoacheeSignup from "./signup.user"
import { cn } from "~/utils"
import { useScreenLarge } from "~/hooks"
import { TooltipAuto, TooltipProvider } from "~/components"

export default function SignupChoice() {
  const [open, setOpen] = useState<null | "coach" | "user">(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleCardClick = (type: "coach" | "user") => {
    setIsTransitioning(true)
    setTimeout(() => {
      setOpen(type)
      setIsTransitioning(false)
    }, 300)
  }

  const handleClose = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setOpen(null)
      setIsTransitioning(false)
    }, 300)
  }

  const renderContent = () => {
    if (open === "coach") {
      return (
        <div className={`space-y-6 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-300`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Coach Application</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Start your professional coaching journey</p>
            </div>
            <div className="flex items-center gap-3">
              <Link 
                to="/signup/coach" 
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
              >
                <span>Open Full Page</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <button 
                onClick={handleClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close form"
              >
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <CoachSignup onClose={handleClose} />
        </div>
      )
    }

    if (open === "user") {
      return (
        <div className={`space-y-6 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-300`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Coachee Registration</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Begin your growth journey</p>
            </div>
            <div className="flex items-center gap-3">
              <Link 
                to="/signup/user" 
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
              >
                <span>Open Full Page</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <button 
                onClick={handleClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close form"
              >
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <CoacheeSignup />
        </div>
      )
    }

    return (
      <div className={`mt-8 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-300`}>
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Choose Your Path to Growth
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Select the account type that matches your goals and start your journey today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Coach Card */}
          <div 
            onClick={() => handleCardClick("coach")}
            className="group cursor-pointer relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>

            <div className="pr-16">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Professional Coach
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Guide others to success with your expertise. Build your coaching practice, 
                connect with clients, and create meaningful impact through personalized mentorship.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Verified certification process</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Client management tools</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Session scheduling system</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                  Apply as Coach
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <Link 
                  to="/signup/coach" 
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline hidden sm:block"
                >
                  Open full page
                </Link>
              </div>
            </div>
          </div>

          {/* Coachee Card */}
          <div 
            onClick={() => handleCardClick("user")}
            className="group cursor-pointer relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>

            <div className="pr-16">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Growth Seeker
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Accelerate your personal and professional development. Find the perfect mentor, 
                book personalized sessions, and achieve your goals with expert guidance.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Personalized coach matching</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Flexible session booking</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Progress tracking tools</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  Join as Coachee
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <Link 
                  to="/signup/user" 
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline hidden sm:block"
                >
                  Open full page
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile full page links */}
        <div className="sm:hidden mt-6 grid grid-cols-1 gap-3">
          <Link 
            to="/signup/coach"
            className="px-4 py-3 text-center bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-lg font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
          >
            Open Coach Signup (Full Page)
          </Link>
          <Link 
            to="/signup/user"
            className="px-4 py-3 text-center bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            Open Coachee Signup (Full Page)
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10 py-8 px-4 sm:px-6 lg:px-8">
      <HeaderNavigation />
      <div className="w-full max-w-6xl">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 sm:p-8 lg:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 dark:from-emerald-800/10 dark:to-blue-800/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/20 to-emerald-200/20 dark:from-blue-800/10 dark:to-emerald-800/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative">
            <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <img src="/images/dolphin.svg" alt="Coachify" className="w-14 h-14 rounded-2xl shadow-lg" />
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                      Join Coachify
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 text-lg">
                      Start your transformation journey
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <ThemeSwitcher />
                <Link 
                  to="/signin" 
                  className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </header>

            {renderContent()}

            <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Already have an account?{" "}
                <Link 
                  to="/signin" 
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline transition-colors"
                >
                  Sign in here
                </Link>
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