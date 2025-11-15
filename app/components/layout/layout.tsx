import { cn } from "~/utils"
import { Footer, HeaderNavigation } from "~/components"

interface Props {
  className?: string
  children: React.ReactNode
  hasFooter?: boolean
  withPadding?: boolean
}

export function Layout({
  className,
  children,
  hasFooter = true,
  withPadding = false,
}: Props) {
  const showBanner = true

  return (
    <div className={cn("flex min-h-screen flex-col")}> 
      <HeaderNavigation />

      {showBanner && <BannerInfo />}

      <main
        className={cn(
          "flex-[1] pb-16 lg:ml-16", // always add bottom padding for nav bar, left margin for desktop
          withPadding && "p-4 sm:p-8",
          className,
        )}
      >
        {children}
      </main>
      {hasFooter && <Footer className="lg:ml-16" />}
    </div>
  )
}

function BannerInfo() {
  return (
    <div className="flex w-full justify-center bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-50 border-b border-stone-200 dark:border-stone-800 p-1">
      <h2 className="text-sm font-medium">Coachify</h2>
    </div>
  )
}
