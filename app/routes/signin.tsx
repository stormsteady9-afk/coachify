import React, { useState } from "react"
import { Link, useSearchParams } from "@remix-run/react"
import ThemeSwitcher from "~/components/ThemeSwitcher"

export default function SignInPage() {
  const [message, setMessage] = useState<string | null>(null)
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get("redirectTo") || "/"

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage("Sign in is not yet implemented in this demo. Please create an account or use the /signup flow.")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-50 to-white dark:from-stone-900 dark:to-stone-800 py-12 px-4">
      <div className="w-full max-w-2xl bg-white dark:bg-stone-900 rounded-2xl shadow-lg p-8">
        <header className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-extrabold">Sign In</h1>
            <p className="text-sm text-stone-500 dark:text-stone-400">Welcome back — enter your email to continue.</p>
          </div>
          <ThemeSwitcher />
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <label className="text-sm">
            <div className="mb-1">Email</div>
            <input type="email" required className="w-full rounded-md border border-stone-200 dark:border-stone-700 p-2 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-50" />
          </label>

          <label className="text-sm">
            <div className="mb-1">Password</div>
            <input type="password" required className="w-full rounded-md border border-stone-200 dark:border-stone-700 p-2 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-50" />
          </label>

          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow">
              Sign In
            </button>
            <Link to={`/signup?redirectTo=${encodeURIComponent(redirectTo)}`} className="text-sm text-emerald-600 dark:text-emerald-400">Create an account</Link>
          </div>
        </form>

        {message && (
          <div className="mt-4 text-sm text-stone-600 dark:text-stone-300">{message}</div>
        )}

        <footer className="mt-6 text-sm text-stone-500 dark:text-stone-400">
          Need help? <Link to="/help" className="text-emerald-600 dark:text-emerald-400">Contact support</Link>
        </footer>
      </div>
    </div>
  )
}
