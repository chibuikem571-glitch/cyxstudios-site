import FadeIn from './components/FadeIn'
import AnimatedHeading from './components/AnimatedHeading'
import auraSalad from './assets/audio/Mavo-Aura-Salad-feat-SSSoundGawd.mp3'
import img4 from './assets/4.png'
import artboard3 from './assets/Artboard 3@1x_1.png'
import mm from './assets/MM.png'
import w1 from './assets/WhatsApp Image 2026-06-02 at 22.27.22.jpeg'
import w2 from './assets/WhatsApp Image 2026-06-02 at 22.27.23 (1).jpeg'
import w3 from './assets/WhatsApp Image 2026-06-02 at 22.27.23 (2).jpeg'
import w4 from './assets/WhatsApp Image 2026-06-02 at 22.27.23 (3).jpeg'
import w5 from './assets/WhatsApp Image 2026-06-02 at 22.27.23.jpeg'
import w6 from './assets/WhatsApp Image 2026-06-02 at 22.27.24 (1).jpeg'
import w7 from './assets/WhatsApp Image 2026-06-02 at 22.27.24 (2).jpeg'
import w8 from './assets/WhatsApp Image 2026-06-02 at 22.27.24 (3).jpeg'
import w9 from './assets/WhatsApp Image 2026-06-02 at 22.27.24 (4).jpeg'
import w10 from './assets/WhatsApp Image 2026-06-02 at 22.27.24.jpeg'
import w11 from './assets/WhatsApp Image 2026-06-02 at 22.27.25 (1).jpeg'
import w12 from './assets/WhatsApp Image 2026-06-02 at 22.27.25 (2).jpeg'
import w13 from './assets/WhatsApp Image 2026-06-02 at 22.27.25 (3).jpeg'
import w14 from './assets/WhatsApp Image 2026-06-02 at 22.27.25.jpeg'
import w15 from './assets/WhatsApp Image 2026-06-02 at 22.27.26 (1).jpeg'
import w16 from './assets/WhatsApp Image 2026-06-02 at 22.27.26 (2).jpeg'
import w17 from './assets/WhatsApp Image 2026-06-02 at 22.27.26 (3).jpeg'
import w18 from './assets/WhatsApp Image 2026-06-02 at 22.27.26.jpeg'
import { useState, FormEvent, useEffect, useRef, useMemo } from 'react'

const navLinks = ['Overview', 'Projects', 'Design', 'Socials']
const sharedImages = [
  { name: '4.png', src: img4 },
  { name: 'Artboard 3@1x_1.png', src: artboard3 },
  { name: 'MM.png', src: mm },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.22.jpeg', src: w1 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.23 (1).jpeg', src: w2 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.23 (2).jpeg', src: w3 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.23 (3).jpeg', src: w4 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.23.jpeg', src: w5 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.24 (1).jpeg', src: w6 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.24 (2).jpeg', src: w7 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.24 (3).jpeg', src: w8 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.24 (4).jpeg', src: w9 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.24.jpeg', src: w10 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.25 (1).jpeg', src: w11 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.25 (2).jpeg', src: w12 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.25 (3).jpeg', src: w13 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.25.jpeg', src: w14 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.26 (1).jpeg', src: w15 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.26 (2).jpeg', src: w16 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.26 (3).jpeg', src: w17 },
  { name: 'WhatsApp Image 2026-06-02 at 22.27.26.jpeg', src: w18 },
]

function Navbar() {
  return (
    <nav className="px-6 md:px-12 lg:px-16 pt-6 relative z-20">
      <div className="glass-panel rounded-3xl px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 shadow-[0_28px_80px_-48px_rgba(0,0,0,0.5)] border border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/15 flex items-center justify-center text-lg font-semibold tracking-tight text-white shadow-glow">
            C
          </div>
          <div>
            <p className="text-xs uppercase text-slate-300 tracking-[0.3em]">cyxstudios</p>
            <p className="text-sm font-semibold">Design command center</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition-colors duration-200 hover:text-white">
              {link}
            </a>
          ))}
        </div>

        <button className="bg-white text-black px-6 py-3 rounded-2xl text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-100">
          Launch design board
        </button>
      </div>
    </nav>
  )
}

function EditableMetricCard({ value, label, onChange }: { value: string; label: string; onChange: (value: string) => void }) {
  return (
    <div className="glass-panel border border-white/15 p-5 rounded-3xl flex flex-col gap-3 min-w-[10rem] shadow-[0_20px_60px_-45px_rgba(0,0,0,0.6)]">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-3xl font-semibold tracking-tight focus:outline-none"
        aria-label={label}
      />
      <span className="text-sm text-slate-300">{label}</span>
    </div>
  )
}

function DashboardCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="glass-panel border border-white/10 rounded-3xl p-6 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.7)] hover:-translate-y-1 transition-transform duration-300">
      <p className="text-sm text-slate-300 tracking-[0.18em] uppercase mb-3">{title}</p>
      <p className="text-lg leading-7 text-slate-100">{content}</p>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),_transparent_28%),radial-gradient(circle_at_70%_20%,_rgba(34,197,94,0.18),_transparent_20%),linear-gradient(180deg,_#020617_0%,_#080811_60%,_#02030b_100%)]" />
      <div className="absolute -left-16 top-32 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl animate-float opacity-80" />
      <div className="absolute right-20 bottom-10 w-64 h-64 rounded-full bg-cyan-400/15 blur-3xl animate-tilt opacity-70" />

      <Navbar />

      <div id="main" className="relative z-10 px-6 md:px-12 lg:px-16 pt-16 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.5fr] items-center">
          <div>
            <AnimatedHeading
              text="Welcome to cyxstudios"
              className="text-4xl md:text-5xl xl:text-6xl font-normal leading-tight tracking-tight"
              charDelay={22}
              initialDelay={180}
              transitionDuration={480}
              style={{ letterSpacing: '-0.03em' }}
            />

            <FadeIn delay={700} duration={900}>
              <p className="mt-6 max-w-3xl text-base md:text-lg text-slate-300 leading-8">
                At 14, I'm a self-taught designer driven by creativity and curiosity. I specialize in building clean, engaging visuals and digital experiences that combine aesthetics with purpose.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={900}>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-white text-black px-7 py-3 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100">
                  View design system
                </button>
                <a href="#design" className="glass-panel border border-white/20 text-white px-7 py-3 rounded-2xl font-semibold transition-all duration-200 hover:bg-white/10">
                  Explore dashboard
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={1400} duration={900}>
              <ProjectsSection />
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-16 py-12">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <p className="text-sm text-slate-300 mb-6">Here are the same uploaded images shown in the Designs section, now grouped as Projects.</p>
      <Gallery images={sharedImages} />
    </section>
  )
}

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [audioAllowed, setAudioAllowed] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem('audioAllowed')
    } catch {
      return false
    }
  })

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.75
    audio.muted = false

    const tryPlay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
        setIsMuted(false)
      } catch (e) {
        setIsPlaying(false)
        setAutoplayBlocked(true)
      }
    }

    tryPlay()
  }, [])

  const handleLoadedMetadata = () => {
    const audio = audioRef.current
    if (!audio) return
    const target = Math.min(100, Math.max(0, audio.duration - 0.5))
    audio.currentTime = target
  }

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const handleUnmute = async () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = false
    setIsMuted(false)
    setAutoplayBlocked(false)
    try {
      localStorage.setItem('audioAllowed', '1')
      setAudioAllowed(true)
    } catch {}
    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3 rounded-3xl border border-white/15 bg-slate-950/90 px-4 py-3 text-white shadow-[0_20px_80px_-50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <button
          type="button"
          onClick={togglePlay}
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-white/20"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        {autoplayBlocked && isMuted ? (
          <button onClick={handleUnmute} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold transition-colors duration-200 hover:bg-white/20">
            Unmute
          </button>
        ) : null}
        <div className="text-right text-xs">
          <p className="font-semibold">Aura Salad</p>
          <p className="text-slate-300">mavo · 1:43</p>
        </div>
      </div>

      {autoplayBlocked && !audioAllowed ? (
        <div className="fixed inset-0 z-40 flex items-start justify-center pt-24 pointer-events-none">
          <div className="pointer-events-auto bg-white/6 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white backdrop-blur-md">
            Autoplay was blocked by your browser. Click to enable audio.
            <button onClick={handleUnmute} className="ml-3 inline-flex items-center justify-center rounded-2xl bg-white text-black px-3 py-1 font-semibold">
              Enable audio
            </button>
          </div>
        </div>
      ) : null}

      <audio ref={audioRef} src={auraSalad} autoPlay playsInline loop onLoadedMetadata={handleLoadedMetadata} />
    </>
  )
}

function GeneralDashboardSection() {
  return (
    <section id="dashboard" className="px-6 md:px-12 lg:px-16 py-12">
      <div className="glass-panel border border-white/15 rounded-[2.5rem] p-8 shadow-[0_36px_120px_-70px_rgba(59,130,246,0.55)]">
        <div className="mb-7">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Dashboard</p>
          <h2 className="text-2xl font-semibold mt-3">General overview</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardCard title="Brand pulse" content="92% engagement rate on latest design drops and interactive concepts." />
          <DashboardCard title="Workspace" content="6 active artboards, 12 collaborators, and instant feedback channels." />
          <div className="glass-panel border border-white/10 rounded-3xl p-6 text-center">
            <p className="text-2xl font-semibold">Feedback</p>
            <p className="mt-2 text-sm text-slate-300">Open the feedback survey and capture design review responses.</p>
            <a href="#feedback" className="mt-4 inline-flex items-center justify-center rounded-2xl bg-white text-black px-4 py-3 font-semibold transition-shadow duration-200 hover:shadow-lg">
              Go to feedback
            </a>
          </div>
          <div className="glass-panel border border-white/10 rounded-3xl p-6 text-center">
            <p className="text-2xl font-semibold">Insights</p>
            <p className="mt-2 text-sm text-slate-300">Track performance, review counts, and creative progress at a glance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [designReview, setDesignReview] = useState('24/7')
  const [reviewName, setReviewName] = useState('')
  const [reviewComment, setReviewComment] = useState('')
  const [reviews, setReviews] = useState<{ name: string; comment: string }[]>([])

  const addReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!reviewName.trim() || !reviewComment.trim()) return
    setReviews((prev) => [{ name: reviewName.trim(), comment: reviewComment.trim() }, ...prev])
    setReviewName('')
    setReviewComment('')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <AudioPlayer />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-3 py-2 rounded">Skip to main content</a>
      <Hero />
      <GeneralDashboardSection />
      <DesignMovementSection />
      <AccessibleDesign />
      <FeedbackSection
        designReview={designReview}
        setDesignReview={setDesignReview}
        reviewName={reviewName}
        setReviewName={setReviewName}
        reviewComment={reviewComment}
        setReviewComment={setReviewComment}
        reviews={reviews}
        addReview={addReview}
      />
      <SocialsSection />
    </div>
  )
}

export default App

function DesignMovementSection() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-12">
      <div className="glass-panel border border-white/15 rounded-[2.5rem] p-8 shadow-[0_36px_120px_-70px_rgba(59,130,246,0.55)] relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Design movement</p>
            <h2 className="text-2xl font-semibold mt-3">Creative dashboard</h2>
          </div>
          <div className="rounded-3xl bg-white/10 px-4 py-2 text-sm text-slate-200 border border-white/10">
            Live
          </div>
        </div>
        <div className="rounded-[2rem] bg-white/5 p-5 border border-white/10 shadow-inner">
          <div className="grid gap-4 sm:grid-cols-2">
            <DashboardCard title="Brand pulse" content="92% engagement rate on latest design drops and interactive concepts." />
            <DashboardCard title="Workspace" content="6 active artboards, 12 collaborators, and instant feedback channels." />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="glass-panel border border-white/10 rounded-3xl p-4 text-center">
              <p className="text-2xl font-semibold">34</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mt-2">Assets</p>
            </div>
            <div className="glass-panel border border-white/10 rounded-3xl p-4 text-center">
              <p className="text-2xl font-semibold">48</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mt-2">Components</p>
            </div>
            <div className="glass-panel border border-white/10 rounded-3xl p-4 text-center">
              <p className="text-2xl font-semibold">99%</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mt-2">Approval rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AccessibleDesign() {
  return (
    <section id="design" role="region" aria-labelledby="design-heading" className="px-6 md:px-12 lg:px-16 py-12">
      <h2 id="design-heading" className="text-2xl font-semibold mb-4">Designs</h2>
      <p className="text-sm text-slate-300 mb-6">Accessible gallery of uploaded design images. Use Tab to focus each image and Enter/Space to open full size.</p>

      <Gallery images={sharedImages} />
    </section>
  )
}

function FeedbackSection({
  designReview,
  setDesignReview,
  reviewName,
  setReviewName,
  reviewComment,
  setReviewComment,
  reviews,
  addReview,
}: {
  designReview: string
  setDesignReview: (value: string) => void
  reviewName: string
  setReviewName: (value: string) => void
  reviewComment: string
  setReviewComment: (value: string) => void
  reviews: { name: string; comment: string }[]
  addReview: (event: React.FormEvent<HTMLFormElement>) => void
}) {
  return (
    <section id="feedback" className="px-6 md:px-12 lg:px-16 py-12">
      <div className="glass-panel border border-white/15 rounded-[2.5rem] p-8 shadow-[0_36px_120px_-70px_rgba(59,130,246,0.55)]">
        <div className="mb-7">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Feedback</p>
          <h2 className="text-2xl font-semibold mt-3">Design reviews & survey</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <EditableMetricCard value={designReview} label="Design reviews" onChange={setDesignReview} />

          <div className="glass-panel border border-white/10 rounded-3xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-4">Share your feedback</h3>
            <form onSubmit={addReview} className="grid gap-4">
              <label className="flex flex-col text-sm text-slate-200">
                Your name
                <input
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  className="mt-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-white focus:outline-none"
                  placeholder="Name"
                />
              </label>
              <label className="flex flex-col text-sm text-slate-200">
                Review
                <textarea
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  className="mt-2 min-h-[120px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-white focus:outline-none resize-none"
                  placeholder="Write your review"
                />
              </label>
              <button type="submit" className="w-full bg-white text-black px-6 py-3 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100">
                Submit review
              </button>
            </form>

            {reviews.length > 0 ? (
              <div className="mt-6 space-y-4">
                <h4 className="text-lg font-semibold">Recent reviews</h4>
                {reviews.map((review, index) => (
                  <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="mt-2 text-slate-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-sm text-slate-400">No reviews yet. Share your thoughts to help us improve.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialsSection() {
  const socials = [
    { label: 'TikTok', href: 'https://www.tiktok.com/@chibuikemithink?_r=1&_t=ZS-96uZ742RI7I', emoji: '🎵' },
    { label: 'Instagram', href: 'https://instagram.com/your-handle', emoji: '📸' },
    { label: 'Twitter', href: 'https://twitter.com/your-handle', emoji: '🐦' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle', emoji: '💼' },
    { label: 'GitHub', href: 'https://github.com/your-handle', emoji: '🐙' },
  ]

  return (
    <section id="socials" className="px-6 md:px-12 lg:px-16 py-12">
      <div className="glass-panel border border-white/15 rounded-[2.5rem] p-8 shadow-[0_36px_120px_-70px_rgba(59,130,246,0.55)]">
        <div className="mb-7">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Socials</p>
          <h2 className="text-2xl font-semibold mt-3">Connect with cyxstudios</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="glass-panel border border-white/10 rounded-3xl p-6 text-center transition-transform duration-200 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="text-3xl mb-4">{social.emoji}</div>
              <p className="font-semibold">{social.label}</p>
              <p className="mt-2 text-sm text-slate-400">Follow for updates and new releases.</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

type GalleryImage = { name: string; src: string }

function Gallery({ images }: { images: GalleryImage[] }) {
  const [showAll, setShowAll] = useState(false)
  const sortedImages = useMemo(
    () => [...images].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })),
    [images],
  )
  const visible = showAll ? sortedImages : sortedImages.slice(0, 6)

  return (
    <>
      <div role="list" className="grid gap-4 sm:grid-cols-3">
        {visible.map((image, i) => {
          const fileName = image.name.replace(/\.[^/.]+$/, '')
          const label = fileName.replace(/[-_]/g, ' ')
          return (
            <figure key={i} role="listitem" className="glass-panel border border-white/10 rounded-2xl p-2">
              <img
                src={image.src}
                alt={label}
                className="w-full h-44 object-cover rounded-lg"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') window.open(image.src, '_blank')
                }}
              />
              <figcaption className="mt-2 text-sm text-slate-300">{label}</figcaption>
            </figure>
          )
        })}
      </div>

      {images.length > 6 ? (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="rounded-2xl bg-white/5 px-6 py-3 text-sm font-semibold border border-white/10 hover:bg-white/10"
          >
            {showAll ? 'See less' : `See more (${images.length - 6})`}
          </button>
        </div>
      ) : null}
    </>
  )
}
