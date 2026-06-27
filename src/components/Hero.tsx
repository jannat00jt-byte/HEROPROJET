import { useRef, useEffect, useState } from 'react'
import { Globe, ArrowRight, Camera, AtSign } from 'lucide-react'

const VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4'
const FADE_DURATION = 500

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const opacityRef = useRef(1)
  const rafRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)

  const [displayOpacity, setDisplayOpacity] = useState(0)

  const cancelRAF = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }

  const fadeTo = (target: number, duration: number, done?: () => void) => {
    cancelRAF()
    const start = performance.now()
    const startOpacity = opacityRef.current
    const delta = target - startOpacity

    const step = (now: number) => {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      opacityRef.current = startOpacity + delta * t
      setDisplayOpacity(opacityRef.current)

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        rafRef.current = null
        done?.()
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }

  const fadeIn = () => {
    fadingOutRef.current = false
    fadeTo(1, FADE_DURATION)
  }

  const fadeOut = (done?: () => void) => {
    fadingOutRef.current = true
    fadeTo(0, FADE_DURATION, done)
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || !video.duration || fadingOutRef.current) return

    const timeLeft = video.duration - video.currentTime
    if (timeLeft <= 0.55) {
      fadeOut()
    }
  }

  const handleEnded = () => {
    const video = videoRef.current
    if (!video) return

    cancelRAF()
    opacityRef.current = 0
    setDisplayOpacity(0)

    setTimeout(() => {
      video.currentTime = 0
      video.play()
      fadeIn()
    }, 100)
  }

  const handleLoadedMetadata = () => {
    fadeIn()
  }

  useEffect(() => {
    return () => cancelRAF()
  }, [])

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Full-screen background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
        src={VIDEO_SRC}
        muted
        autoPlay
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        style={{ opacity: displayOpacity }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <Globe size={24} className="text-white" />
            <span className="text-white font-semibold text-lg">Asme</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'About'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium">Sign Up</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%] min-h-[calc(100vh-120px)]">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built for the curious
        </h1>

        <div className="max-w-xl w-full space-y-4">
          {/* Email input bar */}
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-white placeholder:text-white/40 text-base outline-none"
            />
            <button className="bg-white rounded-full p-3 text-black shrink-0">
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-white text-sm leading-relaxed px-4">
            Stay updated with the latest news and insights. Subscribe to our
            newsletter today and never miss out on exciting updates.
          </p>

          {/* Manifesto button */}
          <div className="flex justify-center pt-2">
            <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              Manifesto
            </button>
          </div>
        </div>
      </div>

      {/* Social icons footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        {[
          { icon: Camera, label: 'Instagram' },
          { icon: AtSign, label: 'Twitter' },
          { icon: Globe, label: 'Website' },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </section>
  )
}
