import React, { useEffect, useState, useRef } from "react"
import { Link } from "@remix-run/react"

// TypeScript interfaces for type safety
interface Post {
  id: number
  author: string
  authorName: string
  avatar: string
  images: string[]
  caption: string
  likes: number
  comments: number
  timeAgo: string
  isLiked: boolean
  isBookmarked: boolean
  type: string
  book: { title: string; author: string; cover: string }
}

interface Story {
  id: number
  name: string
  displayName: string
  avatar: string
  hasNewStory: boolean
  isLive: boolean
}

// Sample realistic data for the feed
const MOTIVATIONAL_QUOTES = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Your time is limited, don't waste it living someone else's life.",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "The only impossible journey is the one you never begin. - Tony Robbins"
]

const COACHING_BOOKS = [
  { title: "Atomic Habits", author: "James Clear", cover: "/images/books/atomic-habits.jpg" },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", cover: "/images/books/7-habits.jpg" },
  { title: "Mindset", author: "Carol Dweck", cover: "/images/books/mindset.jpg" },
  { title: "The Power of Now", author: "Eckhart Tolle", cover: "/images/books/power-of-now.jpg" },
  { title: "Daring Greatly", author: "Brené Brown", cover: "/images/books/daring-greatly.jpg" },
  { title: "Start with Why", author: "Simon Sinek", cover: "/images/books/start-with-why.jpg" }
]

const MOTIVATIONAL_IMAGES = [
  "/images/11.jpg",
  "/images/22.webp",
  "/images/33.jpg",
  "/images/44.webp",
  "/images/55.jpg",
  "/images/66.webp",
  "/images/77.webp"
]

export default function CoacheeFeed() {
  const [posts, setPosts] = useState<Post[]>([])
  const [stories, setStories] = useState<Story[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Initialize with realistic data
  useEffect(() => {
    const generatedPosts = Array.from({ length: 12 }).map((_, i) => {
      const hasMultipleImages = Math.random() > 0.7
      const imageCount = hasMultipleImages ? Math.floor(Math.random() * 3) + 2 : 1
      
      return {
        id: i + 1,
        author: `coach_${["alex", "sarah", "mike", "jessica", "david", "lisa"][i % 6]}_${i + 1}`,
        authorName: ["Alex Thompson", "Sarah Chen", "Mike Rodriguez", "Jessica Williams", "David Kim", "Lisa Anderson"][i % 6],
        avatar: `/images/avatars/avatar-${(i % 6) + 1}.jpg`,
        images: Array.from({ length: imageCount }).map((_, imgIndex) => 
          MOTIVATIONAL_IMAGES[(i + imgIndex) % MOTIVATIONAL_IMAGES.length]
        ),
        caption: MOTIVATIONAL_QUOTES[i % MOTIVATIONAL_QUOTES.length],
        likes: Math.floor(Math.random() * 100) + 10,
        comments: Math.floor(Math.random() * 50),
        timeAgo: `${Math.floor(Math.random() * 12) + 1}h ago`,
        isLiked: Math.random() > 0.7,
        isBookmarked: Math.random() > 0.8,
        type: Math.random() > 0.5 ? "motivation" : "book_recommendation",
        book: COACHING_BOOKS[i % COACHING_BOOKS.length]
      }
    })

    const generatedStories = Array.from({ length: 8 }).map((_, i) => ({
      id: i + 1,
      name: ["leadership_expert", "mindset_coach", "career_guru", "life_designer", "growth_master", "success_mentor"][i % 6],
      displayName: ["Leadership Pro", "Mindset Coach", "Career Guru", "Life Designer", "Growth Master", "Success Mentor"][i % 6],
      avatar: `/images/avatars/story-${(i % 6) + 1}.jpg`,
      hasNewStory: Math.random() > 0.3,
      isLive: Math.random() > 0.8
    }))

    setPosts(generatedPosts)
    setStories(generatedStories)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (_post: Post, totalSlides: number) => {
    if (!touchStartX.current || !touchEndX.current) return

    const difference = touchStartX.current - touchEndX.current
    const isLeftSwipe = difference > 50
    const isRightSwipe = difference < -50

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1)
    } else if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    }

    touchStartX.current = 0
    touchEndX.current = 0
  }

  const toggleLike = (postId: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ))
  }

  const toggleBookmark = (postId: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, isBookmarked: !post.isBookmarked }
        : post
    ))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <h1 className="font-bold text-xl bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-100 dark:to-blue-100 bg-clip-text text-transparent">
              Coachify Feed
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/search" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link 
              to="/create" 
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Create
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto pb-20">
        {/* Stories Section */}
        <section className="border-b border-slate-200 dark:border-slate-800 pb-4 px-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Stories</h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">Watch all</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {/* Your Story */}
            <div className="flex-shrink-0 w-20 text-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center mx-auto border-2 border-dashed border-slate-300 dark:border-slate-600">
                  <svg className="w-6 h-6 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white dark:bg-slate-900 rounded-full border-2 border-white dark:border-slate-900">
                  <div className="w-full h-full bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 truncate">Your story</p>
            </div>

            {/* Coachify Dolphin Story */}
            <div className="flex-shrink-0 w-20 text-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full p-0.5 mx-auto bg-gradient-to-tr from-blue-500 to-emerald-500 border-2 border-blue-400">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 p-0.5 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/dolphin.png" 
                      alt="Coachify Dolphin"
                      className="w-full h-full object-cover"
                      onError={(e) => { try { (e.target as HTMLImageElement).src = '/images/dolphin.svg' } catch {} }}
                    />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900">
                  <div className="w-full h-full rounded-full bg-blue-500 animate-pulse" />
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 truncate font-semibold">Coachify</p>
            </div>

            {/* Other Stories */}
            {stories.map(story => (
              <div key={story.id} className="flex-shrink-0 w-20 text-center">
                <div className="relative">
                  <div className={`w-16 h-16 rounded-full p-0.5 mx-auto ${
                    story.hasNewStory 
                      ? 'bg-gradient-to-tr from-purple-500 to-pink-500' 
                      : 'bg-gradient-to-tr from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-500'
                  }`}>
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 p-0.5">
                      <img 
                        src={story.avatar} 
                        alt={story.displayName}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  {story.isLive && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900">
                      <div className="w-full h-full rounded-full bg-red-500 animate-pulse" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 truncate">{story.displayName}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Create Post */}
        <section className="border-b border-slate-200 dark:border-slate-800 px-4 py-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <input 
                placeholder="Share your growth journey or ask for guidance..." 
                className="flex-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Photo</span>
                </button>
                <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Video</span>
                </button>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-200">
                Share
              </button>
            </div>
          </div>
        </section>

        {/* Feed Posts */}
        <section className="space-y-6 py-4">
          {posts.map((post, index) => (
            <article key={post.id} className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
              {/* Post Header */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 p-0.5">
                    <img 
                      src={post.avatar} 
                      alt={post.authorName}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{post.authorName}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{post.timeAgo}</div>
                  </div>
                </div>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>

              {/* Swipeable Image Carousel */}
              <div 
                className="relative bg-slate-900 overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => handleTouchEnd(post, post.images.length)}
              >
                <div 
                  className="flex transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {post.images.map((image, imageIndex) => (
                    <div key={`${post.id}-${imageIndex}`} className="w-full flex-shrink-0 aspect-square">
                      <img 
                        src={image} 
                        alt={`Post by ${post.authorName}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Image Indicators */}
                {post.images.length > 1 && (
                  <div className="absolute top-4 right-4 flex gap-1">
                    {post.images.map((_, index) => (
                      <div 
                        key={`${post.id}-dot-${index}`}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-white' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Navigation Arrows */}
                {post.images.length > 1 && (
                  <>
                    {currentSlide > 0 && (
                      <button 
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                        onClick={() => setCurrentSlide(prev => prev - 1)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    )}
                    {currentSlide < post.images.length - 1 && (
                      <button 
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                        onClick={() => setCurrentSlide(prev => prev + 1)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => toggleLike(post.id)}
                      className={`p-2 rounded-full transition-all duration-200 ${
                        post.isLiked 
                          ? 'text-red-500 bg-red-50 dark:bg-red-900/20' 
                          : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <svg className="w-6 h-6" fill={post.isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                  <button 
                    onClick={() => toggleBookmark(post.id)}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      post.isBookmarked 
                        ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <svg className="w-6 h-6" fill={post.isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>

                {/* Likes and Caption */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold">{post.likes.toLocaleString()} likes</div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-semibold mr-2">{post.authorName}</span>
                    {post.caption}
                  </p>
                  
                  {/* Book Recommendation */}
                  {post.type === "book_recommendation" && (
                    <div className="mt-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-xs text-center px-1">📚</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{post.book.title}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">by {post.book.author}</div>
                          <button className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1 hover:underline">
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* View Comments */}
                  <button className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                    View all {post.comments} comments
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 sm:hidden">
        <div className="max-w-2xl mx-auto px-6 flex items-center justify-between py-3">
          {[
            { icon: "🏠", label: "Home", href: "/" },
            { icon: "🔍", label: "Search", href: "/search" },
            { icon: "➕", label: "Create", href: "/create" },
            { icon: "💬", label: "Messages", href: "/messages" },
            { icon: "👤", label: "Profile", href: "/profile" }
          ].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex flex-col items-center gap-1 text-xs transition-all duration-200 hover:scale-110"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}