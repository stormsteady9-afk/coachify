
import { json } from "@remix-run/node"
import type { LoaderArgs } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import arrayShuffle from "array-shuffle"
import ThemeSwitcher from "~/components/ThemeSwitcher";
import { prisma } from "~/libs"
import { createCacheHeaders } from "~/utils"
import { useRootLoaderData } from "~/hooks"
import { AvatarAuto, Layout, UserCard } from "~/components"
import React, { useState, useEffect } from "react"

export async function loader({ request }: LoaderArgs) {
  const mentors = await prisma.user.findMany({
    take: 12,
    orderBy: { createdAt: "asc" },
    where: {
      isPublic: true,
      tags: { some: { symbol: "MENTOR" } },
    },
    select: {
      id: true,
      name: true,
      username: true,
      avatars: { select: { url: true } },
      tags: { select: { id: true, symbol: true, name: true } },
      profiles: { select: { headline: true, links: true } },
    },
  })

  const mentees = await prisma.user.findMany({
    take: 20,
    orderBy: { createdAt: "asc" },
    where: {
      isPublic: true,
      tags: { some: { symbol: "MENTEE" } },
    },
    select: {
      id: true,
      name: true,
      username: true,
      avatars: { select: { url: true } },
    },
  })

  return json(
    { mentors: arrayShuffle(mentors), mentees: arrayShuffle(mentees) },
    { headers: createCacheHeaders(request, 10) },
  )
}

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);
  const [introPhase, setIntroPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase(1), 800);
    const timer2 = setTimeout(() => setIntroPhase(2), 1600);
    const timer3 = setTimeout(() => setShowIntro(false), 2800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (showIntro) {
    return <IntroSplash phase={introPhase} />;
  }

  return (
    <Layout className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-emerald-900/10 pb-16">
      <div className="fixed top-6 right-6 z-40">
        <ThemeSwitcher />
      </div>
      <LandingHero />
      <LandingMentors />
      <LandingMentees />
    </Layout>
  )
}

// --- Premium Intro Splash with Dolphin ---
export function IntroSplash({ phase }: { readonly phase: number }) {
  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900 transition-all duration-1000 ${
      phase === 2 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      
      {/* Animated Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-600/20 to-transparent" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-slate-900/80 to-blue-900/90" />
        
        {/* Floating Bubbles */}
        <div className="absolute inset-0">
          {React.useMemo(() => {
            const bs = Array.from({ length: 20 }).map(() => {
              const left = `${Math.random() * 100}%`;
              const width = `${Math.random() * 20 + 5}px`;
              const height = `${Math.random() * 20 + 5}px`;
              const delay = `${Math.random() * 5}s`;
              const duration = `${Math.random() * 10 + 10}s`;
              return { id: `bubble-${Math.random().toString(36).slice(2,9)}`, left, width, height, delay, duration };
            });
            return bs.map(b => (
              <div
                key={b.id}
                className="absolute rounded-full bg-white/10 animate-float"
                style={{ left: b.left, bottom: '-20px', width: b.width, height: b.height, animationDelay: b.delay, animationDuration: b.duration }}
              />
            ));
          }, [])}
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 flex flex-col items-center justify-center text-center text-white transition-all duration-1000 ${
        phase === 1 ? 'scale-110' : 'scale-100'
      }`}>
        
        {/* Dolphin Animation */}
        <div className={`relative mb-8 transition-all duration-1000 ${
          phase === 1 ? 'scale-110 rotate-12' : 'scale-100'
        }`}>
          <div className="relative">
            <img
              src="/images/dolphin-leaping.png"
              alt="Coachify Dolphin"
              loading="lazy"
                onError={(e) => {
                  try { (e.target as HTMLImageElement).src = '/images/dolphin.svg' } catch {}
                }}
              className={`w-32 h-32 transition-all duration-1000 ${
                phase === 1 ? 'animate-bounce' : 'animate-pulse'
              }`}
            />
            {/* Water Splash Effect */}
            <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-blue-400/30 blur-xl rounded-full transition-all duration-1000 ${
              phase === 1 ? 'scale-150 opacity-50' : 'scale-100 opacity-30'
            }`} />
          </div>
        </div>

        {/* Text Content with Staggered Animation */}
        <div className="space-y-4">
          <h1 className={`text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${
            phase === 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            COACHIFY
          </h1>
          
          <div className={`transition-all duration-1000 delay-500 ${
            phase === 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <p className="text-xl font-light tracking-widest text-blue-200 mb-2">
              Real Talk, Real Growth
            </p>
            <p className="text-sm font-extralight tracking-wide text-blue-300 max-w-xs mx-auto leading-relaxed">
              Real conversations Real growth  Coaching that helps you move ahead.
            </p>
          </div>
        </div>

        {/* Loading Bar */}
        <div className={`mt-12 w-64 transition-all duration-1000 delay-700 ${
          phase === 1 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-loading-bar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function LandingHero() {
  const { userSession } = useRootLoaderData()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl animate-float-slow" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl animate-float-slower" />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="relative">
                  <img
                    src="/images/dolphin-leaping.png"
                    alt="Coachify Dolphin"
                    loading="lazy"
                      onError={(e) => { try { (e.target as HTMLImageElement).src = '/images/dolphin.svg' } catch {} }}
                    className="w-20 h-20 animate-float"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg" />
                </div>
                <div>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-900 dark:from-slate-100 dark:via-blue-100 dark:to-emerald-100 bg-clip-text text-transparent leading-tight">
                    Coachify AI
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                    MindGram Rise Higher
                  </p>
                </div>
              </div>

              {/* Minimal Hero: only two CTAs */}

              {!userSession && (
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
                  <Link
                    to="/felix"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-lg">Chat With AI Coach</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>

                  <Link
                    to="/signup"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 bg-white/80 dark:bg-slate-800/60 font-semibold hover:bg-blue-50 dark:hover:bg-slate-700/60 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-lg">Browse Human Coaches</span>
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </Link>
                </div>
              )}

              {userSession && (
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
                  <Link 
                    to="/mentors" 
                    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Browse Human Coaches
                  </Link>
                  <Link 
                    to="/community" 
                    className="px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-slate-800/60 font-semibold hover:bg-blue-50 dark:hover:bg-slate-700/60 transition-all duration-300"
                  >
                    Join Community
                  </Link>
                </div>
              )}

            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <img
                src="/images/dolphin-swimming.png"
                alt="AI Coaching Illustration"
                loading="lazy"
                  onError={(e) => { try { (e.target as HTMLImageElement).src = '/images/dolphin.svg' } catch {} }}
                className="w-full max-w-2xl animate-float-slow"
              />
              {/* Floating elements around the dolphin */}
              <div className="absolute top-10 -left-10 w-24 h-24 bg-blue-100/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-20 -right-10 w-32 h-32 bg-emerald-100/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export function LandingMentors() {
  const { mentors } = useLoaderData<typeof loader>()

  if (mentors.length <= 0) {
    return null
  }

  return (
    <section className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent mb-4">
            Expert Mentors
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Connect with verified professionals ready to guide your growth journey
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map(user => {
            return (
              <div key={user.id} className="group">
                <Link to={`/${user.username}`} className="block">
                  <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <UserCard user={user as any} />
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/mentors" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors duration-300"
          >
            View All Mentors
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function LandingMentees() {
  const { mentees } = useLoaderData<typeof loader>()

  if (mentees.length <= 0) {
    return null
  }

  return (
    <section className="py-20 px-6 lg:px-8 bg-white/50 dark:bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-emerald-900 dark:from-slate-100 dark:to-emerald-100 bg-clip-text text-transparent mb-4">
            Growing Community
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join thousands of learners and professionals transforming their lives
          </p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mentees.map(user => {
            return (
              <div key={user.id} className="group">
                <Link
                  to={`/${user.username}`}
                  className="flex items-center gap-4 p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <AvatarAuto className="h-14 w-14" user={user} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 dark:text-white truncate">
                      {user.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                      @{user.username}
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Additional optional CSS animations used by the intro and illustrations.
// If you'd like these locally, copy them into your global CSS (e.g. app/styles/globals.css).
/*
@keyframes float { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-20px) rotate(2deg)} }
@keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px) scale(1.02)} }
@keyframes float-slower { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
@keyframes loading-bar { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
.animate-float { animation: float 3s ease-in-out infinite }
.animate-float-slow { animation: float-slow 6s ease-in-out infinite }
.animate-float-slower { animation: float-slower 8s ease-in-out infinite }
.animate-loading-bar { animation: loading-bar 2s ease-in-out infinite }
*/