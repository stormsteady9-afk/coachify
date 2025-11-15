import React, { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme")
      if (saved === "dark" || saved === "light") return saved
      // fallback to system preference
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return "dark"
  })

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  return (
    <button
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}
      className="inline-flex items-center justify-center p-2 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
    >
      {/* Moon / Sun icons */}
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-300">
          <path d="M21.64 13.64a9 9 0 11-11.28-11.28 7 7 0 0011.28 11.28z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-stone-700">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M4.636 6.636L6.05 8.05M17.95 17.95l1.414 1.414" />
        </svg>
      )}
    </button>
  )
}