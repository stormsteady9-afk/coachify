import type { ReactNode } from "react"
import { NavLink, useNavigate } from "@remix-run/react"
import {
  IconDashboard,
  IconRobot,
  IconArrowRight,
  IconMessage,
  IconLogout,
} from "@tabler/icons-react"

import { cn } from "~/utils"
import { useScreenLarge } from "~/hooks"
import { TooltipAuto, TooltipProvider } from "~/components"

type NavItem = {
  to: string
  text: string
  icon: ReactNode
  action?: () => void
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

export function HeaderNavigation() {
  const navigate = useNavigate()

  const handleFeedback = () => {
    // Open feedback form in new window
    window.open('/feedback', '_blank', 'width=600,height=700')
  }

  const handleQuit = () => {
    // Close the application (for web app, we'll redirect to home)
    if (typeof window !== 'undefined') {
      window.location.href = 'about:blank'
      window.close()
      // Fallback to home if window.close doesn't work
      setTimeout(() => navigate('/'), 100)
    }
  }

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
        "border-stone-200 bg-white dark:bg-slate-950 dark:border-stone-800", // solid backgrounds
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

export function NavigationList({ navItems }: { readonly navItems: NavItem[] }) {
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