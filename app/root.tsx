import { useEffect } from "react"
import type { ReactNode } from "react"
import type { UserData, UserSession } from "~/services/types"
import ThemeSwitcher from "./components/ThemeSwitcher"
import type {
  LinksFunction,
  V2_MetaFunction,
} from "@remix-run/node"
import { json } from "@remix-run/node"
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useRouteError,
} from "@remix-run/react"
import brandFontStyles from "@fontsource/anybody/600.css"
import monoFontStyles from "@fontsource/pt-mono/index.css"
import sansFontStyles from "@fontsource/pt-sans/index.css"
import { Analytics } from "@vercel/analytics/react"
import NProgress from "nprogress"

import { Layout, Toaster } from "./components"
import styles from "./globals.css"

export const links: LinksFunction = () => [
  {
    rel: "shortcut icon",
    href: "/images/dolphin.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/images/dolphin.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/images/dolphin.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/images/dolphin.png",
  },
  { rel: "stylesheet", href: brandFontStyles },
  { rel: "stylesheet", href: sansFontStyles },
  { rel: "stylesheet", href: monoFontStyles },
  { rel: "stylesheet", href: styles },
]

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Coachify" },
    {
      name: "description",
      content: "Brilliant mentoring platform for people and organization.",
    },
  ]
}

interface LoaderData {
  nodeEnv: string | undefined;
  userSession: UserSession | null;
  userData: UserData | null;
}

export const loader = () => {
  const nodeEnv = process.env.NODE_ENV;
  return json<LoaderData>({ 
    nodeEnv,
    userSession: null,
    userData: null
  });
}

function App() {
  const { nodeEnv } = useLoaderData<LoaderData>()
  const navigation = useNavigation()

  useEffect(() => {
    if (navigation.state === "idle") NProgress.done()
    else NProgress.start()
  }, [navigation.state])

  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-stone-50 text-stone-950 dark:bg-stone-950 dark:text-stone-50">
        <Outlet />
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {nodeEnv !== "development" && <Analytics />}
      </body>
    </html>
  )
}

export default App

export function AppBoundary({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-stone-50 text-stone-950 dark:bg-stone-950 dark:text-stone-50">
        <ThemeSwitcher />
        <Layout className="p-4">{children}</Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <AppBoundary>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </AppBoundary>
    )
  } else if (error instanceof Error) {
    return (
      <AppBoundary>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </AppBoundary>
    )
  } else {
    return (
      <AppBoundary>
        <h1>Unknown Error</h1>
      </AppBoundary>
    )
  }
}
