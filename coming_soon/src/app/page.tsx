'use client'

import { useState } from "react"
import { Mail, Clock, Sparkles, ArrowRight, Bell } from "lucide-react"
import FoodDoodles from "../components/doodles"

export default function ComingSoonPage() {
  const [isHovered, setIsHovered] = useState(false)
  const [isEmailHovered, setIsEmailHovered] = useState(false)

  return (
    <div className="min-h-screen bg-black text-neutral-100 relative overflow-hidden">
      <FoodDoodles />
      
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-blue-400/5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-1/4 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main container with improved layout */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header section */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-6xl w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left column - Brand and messaging */}
              <div className="text-center lg:text-left space-y-8">
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="flex flex-col items-center lg:items-start space-y-6"
                >
                  {/* Logo with enhanced styling */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-xl animate-pulse group-hover:bg-orange-500/30 transition-all duration-500" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-3 rounded-2xl border border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-500">
                      <div className={`w-16 h-16 transition-all duration-500 ${isHovered ? "scale-110 rotate-3" : ""}`}>
                        <img
                          src="/bowlLogo.png"
                          alt="BowlRMS Logo"
                          className="w-full h-full object-contain"
                          draggable="false"
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                    <Sparkles
                      className={`w-6 h-6 text-orange-400 absolute -top-2 -right-2 transition-all duration-500 ${isHovered ? "scale-125 rotate-45" : ""}`}
                    />
                  </div>

                  {/* Brand name with enhanced typography */}
                  <div className="space-y-2">
                    <h1
                      className={`text-6xl lg:text-7xl font-black transition-all duration-500 bg-gradient-to-br from-[#ff7d00] to-black bg-clip-text text-transparent ${isHovered ? "tracking-wide" : "tracking-tight"}`}
                    >
                      BowlRMS
                    </h1>
                    <p className="text-lg text-neutral-400 font-medium">Restaurant Management Reimagined</p>
                  </div>

                  {/* Status badge with improved styling */}
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/50 backdrop-blur-sm border border-orange-500/30">
                    <div className="relative">
                      <Clock className="w-5 h-5 text-orange-400 animate-spin" />
                      <div className="absolute inset-0 bg-orange-400/20 rounded-full animate-ping" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">Coming Soon</span>
                  </div>
                </div>

                {/* Enhanced description */}
                <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
                  <p className="text-md text-neutral-300 leading-relaxed">
                    The future of restaurant operations is here. Streamline your workflow, enhance customer experience, and boost efficiency with our revolutionary management platform.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <div className="px-3 py-1 bg-orange-500/10 rounded-full text-xs text-orange-400 border border-orange-500/20">
                      Real-time Analytics
                    </div>
                    <div className="px-3 py-1 bg-orange-500/10 rounded-full text-xs text-orange-400 border border-orange-500/20">
                      Smart Inventory
                    </div>
                    <div className="px-3 py-1 bg-orange-500/10 rounded-full text-xs text-orange-400 border border-orange-500/20">
                      Staff Management
                    </div>
                    <div className="px-3 py-1 bg-orange-500/10 rounded-full text-xs text-orange-400 border border-orange-500/20">
                      ...
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Waitlist form */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md">
                  <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-neutral-700/50 shadow-2xl">
                    <div className="text-center space-y-6">
                      {/* Form header */}
                      <div className="space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl border border-orange-500/30">
                          <Bell className="w-8 h-8 text-orange-400" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-neutral-100 mb-2">Join the Waitlist</h2>
                          <p className="text-sm text-neutral-400">Be the first to revolutionize your restaurant operations and get exclusive early access.</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="space-y-4">
                        <a
                          href="mailto:support@bowlrms.com?subject=BowlRMS Waitlist&body=I'd like to join the waitlist."
                          onMouseEnter={() => setIsEmailHovered(true)}
                          onMouseLeave={() => setIsEmailHovered(false)}
                          className="group relative block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <Mail className="w-5 h-5" />
                            <span>Join Waitlist</span>
                            <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isEmailHovered ? "translate-x-1" : ""}`} />
                          </div>
                        </a>
                        
                        <p className="text-xs text-neutral-500">
                          Or email directly:{" "}
                          <a 
                            href="mailto:support@bowlrms.com" 
                            className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                          >
                            support@bowlrms.com
                          </a>
                        </p>
                      </div>

                      {/* Benefits list */}
                      <div className="pt-4 border-t border-neutral-700/50">
                        <div className="space-y-3 text-xs text-neutral-400">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                            <span>Early access to beta features</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                            <span>Exclusive launch pricing</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                            <span>Priority support & onboarding</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with additional info */}
        <div className="px-6 py-8 border-t border-neutral-800/50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs text-neutral-500">
              Built for restaurants, by restaurant professionals. Expected launch: Q4 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}