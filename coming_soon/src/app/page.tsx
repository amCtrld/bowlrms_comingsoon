"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faWhatsapp, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import FoodDoodles from "../components/doodles";
import Image from "next/image";

export default function ComingSoonPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [particles, setParticles] = useState<
    { left: string; top: string; animationDelay: string; animationDuration: string }[]
  >([]);

  useEffect(() => {
    setIsLoaded(true);

    // Only generate particles on the client
    const generated = Array.from({ length: 12 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }));
    setParticles(generated);
  }, []);

  const handleSubmit = () => {
    if (email) {
      window.open(
        `mailto:support@bowlrms.com?subject=Early Access Request&body=I'm interested in early access to BowlRMS. My email: ${email}`,
        "_blank"
      );
    }
  };

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
      <div className="absolute inset-0 bg-black/20" />

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
            <p className="text-orange-400/80 text-sm font-medium tracking-widest transition-all duration-1000 delay-">
              BowlRMS, 2025
            </p>

            {/* Heading */}
            <h1
              className={`text-4xl md:text-5xl font-bold text-white transition-all duration-1000 delay-400 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Coming Soon.
            </h1>
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
                  <Image
                    src="/images/bowlShot.png"
                    alt="BowlRMS Preview"
                    width={600} // set to your actual image width
                    height={400} // set to your actual image height
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                  />
                </div>
              </div>
            </div>

            {/* Email Signup */}
            <div className="w-full space-y-3 text-center ">
              <div>
                <h2
                  className={`text-lg md:text-3xl font-thin text-white transition-all duration-1000 delay-700 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  Join the waitlist
                </h2>
              </div>
              <div
                className={`w-full max-w-2xl transition-all duration-1000 delay-800 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="flex gap-3 bg-white/10 p-1 rounded-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                    className="flex-1 px-4 py-3 bg-black/40 backdrop-blur-sm rounded-full focus:outline-none text-white placeholder-white/50 focus:ring-2 focus:ring-orange-500/40 transition-all"
                  />
                  <button
                    onClick={handleSubmit}
                    className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black font-medium px-5 py-3 rounded-full transition-transform transform hover:scale-105 flex items-center gap-2"
                  >
                    <span className="hidden sm:inline text-sm">Join</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
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
                <span>Questions?</span>
                <a
                  href="mailto:support@bowlrms.com"
                  className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                >
                  support@bowlrms.com
                </a>
              </div>

              {/* Socials */}
              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-3">
                  <a
                    href="https://x.com/bowlRMS"
                    className="hover:text-orange-400 transition-colors"
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
                    href="#"
                    className="text-white/30 cursor-not-allowed"
                    aria-label="Instagram (coming soon)"
                    tabIndex={-1}
                    aria-disabled="true"
                    onClick={e => e.preventDefault()}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a
                    href="#"
                    className="text-white/30 cursor-not-allowed"
                    aria-label="LinkedIn (coming soon)"
                    tabIndex={-1}
                    aria-disabled="true"
                    onClick={e => e.preventDefault()}
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
  );
}
