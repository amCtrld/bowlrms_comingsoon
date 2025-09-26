"use client"

import { useState, useEffect } from "react"
import { ExternalLink } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faWhatsapp, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import FoodDoodles from "../components/doodles"

export default function BetaLivePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [particles, setParticles] = useState<
    { left: string; top: string; animationDelay: string; animationDuration: string }[]
  >([])

  useEffect(() => {
    setIsLoaded(true)
    // Only generate particles on the client
    const generated = Array.from({ length:12 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }))
    setParticles(generated)
  }, [])

  const handleBetaAccess = () => {
    window.open('https://beta.bowlrms.com', '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
        radial-gradient(circle at 20% 30%, #000000 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 125, 0, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 60% 20%, rgba(255, 125, 0, 0.15) 0%, transparent 50%),
        linear-gradient(135deg, #0a0a0a 0%,rgb(0, 0, 0) 25%, #2a1a0a 50%, #1a1a1a 75%, #0a0a0a 100%)
      `,
      }}
    >
      <FoodDoodles />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left section */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="max-w-lg w-full text-center space-y-8">
            {/* Logo */}
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative group inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/20 group-hover:border-orange-400/40">
                  <img
                    src="/bowlLogo.png"
                    alt="BowlRMS"
                    className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                    draggable="false"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-orange-400/80 text-sm font-medium tracking-widest transition-all duration-1000 delay-200">
              BowlRMS, 2025
            </p>

            {/* Heading */}
            <div className="space-y-4">
              <h1
                className={`text-3xl md:text-5xl font-bold text-white transition-all duration-1000 delay-400 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Beta Release is Live!
              </h1>
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-1000 delay-800 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <button
                onClick={handleBetaAccess}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto text-lg"
              >
                <span>Try Beta Now</span>
                <ExternalLink className="w-5 h-5 animate-bounce group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col items-center justify-center bg-black p-6 md:p-12 relative min-h-[600px]">
          <div className="w-full flex flex-col items-center space-y-8 z-10">
            {/* App Preview Image */}
            <div
              className={`transition-all duration-1000 delay-600 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl blur-2xl group-hover:blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 group-hover:border-orange-400/40">
                  <img
                    src="/images/bowlShot.png"
                    alt="BowlRMS Preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                  />
                </div>
              </div>
            </div>

            {/* Features Preview */}
            <div
              className={`text-center space-y-4 transition-all duration-1000 delay-700 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="text-xl md:text-2xl font-light text-white">
                Run Smoother, serve smarter
              </h2>
              <p className="text-white/70 max-w-md mx-auto leading-relaxed">
                Join our beta program.
              </p>
            </div>
          </div>

          {/* Contact and Socials */}
          <div
            className={`w-full max-w-3xl transition-all duration-1000 delay-[1000ms] absolute bottom-6 left-1/2 -translate-x-1/2 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="md:flex space-y-4 md:space-y-0 justify-center gap-6 text-sm text-white/60 text-center md:text-left">
              {/* Contact */}
              <div className="flex items-center justify-center gap-2">
                <a
                  href="mailto:petrembugua@gmail.com"
                  className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                >
                  Support
                </a>
              </div>
              {/* Socials */}
              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-3">
                  <a
                    href="https://x.com/bowlRMS"
                    className="hover:text-gray-800 transition-colors"
                    aria-label="BowlRMS on X"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faXTwitter} size="lg" />
                  </a>
                  <a
                    href="https://wa.me/254703388816"
                    className="hover:text-green-400 transition-colors"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                  </a>
                  <a
                    href="https://instagram.com/bowlrms"
                    className="hover:text-pink-700"
                    aria-label="Instagram"
                    tabIndex={-1}
                    aria-disabled="true"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a
                    href="#"
                    className="text-white/30 cursor-not-allowed"
                    aria-label="LinkedIn (coming soon)"
                    tabIndex={-1}
                    aria-disabled="true"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-orange-400/20 rounded-full animate-pulse"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}
      </div>
    </div>
  )
}