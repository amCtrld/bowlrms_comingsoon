// app/coming-soon/page.tsx
"use client"

import { useState } from "react"
import { Mail, Clock, Sparkles, Users } from "lucide-react"
import FoodDoodles from "../components/doodles"

export default function ComingSoonPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen bg-black text-neutral-100 flex items-center justify-center relative overflow-hidden px-6">
      <FoodDoodles />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-1/4 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="text-center space-y-10 max-w-4xl relative z-10">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-col items-center space-y-4"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-md animate-pulse" />
            <div className="relative bg-black p-1 rounded-full">
              <div className={`w-12 h-12 transition-all duration-500 ${isHovered ? "scale-110 rotate-3" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g transform="translate(0,500) scale(0.1,-0.1)">
                    <path
                      d="M2430 4561 c-209 -69 -277 -301 -135 -459 l45 -49 -88 -12 c-48 -6 -141 -25 -206 -41 -313 -79 -588 -236 -829 -472 l-120 -116 7 -67 c13 -126 37 -238 77 -361 22 -68 42 -124 44 -124 2 0 18 26 35 58 139 247 360 458 605 578 224 109 391 148 635 148 236 0 404 -38 617 -139 261 -123 497 -352 639 -619 l47 -89 15 29 c48 92 114 324 127 448 l7 66 -55 69 c-169 209 -460 417 -733 525 -111 44 -299 92 -417 107 l-88 12 34 36 c137 142 104 361 -66 448 -55 27 -151 39 -197 24z"
                      fill="#ff7d00"
                      fillOpacity="0.9"
                    />
                    <path
                      d="M828 2963 c-45 -99 -91 -241 -120 -374 -20 -93 -23 -131 -23 -354 0 -222 3 -262 23 -358 155 -736 697 -1277 1442 -1439 93 -20 132 -22 350 -22 273 0 345 10 562 80 629 203 1097 731 1230 1385 20 101 23 142 23 359 -1 216 -3 257 -24 350 -21 98 -76 278 -105 345 l-13 30 -28 -85 c-35 -108 -120 -284 -183 -380 l-50 -75 0 -175 c1 -197 -19 -323 -74 -478 -164 -467 -522 -790 -1018 -920 -99 -25 -118 -27 -320 -27 -202 0 -221 2 -320 27 -568 149 -962 561 -1071 1120 -24 123 -30 363 -11 465 9 50 7 55 -26 110 -57 94 -128 251 -170 376 l-39 118 -35 -78z"
                      fill="#ff7d00"
                      fillOpacity="0.9"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <Sparkles
              className={`w-4 h-4 text-orange-400 absolute -top-1 -right-1 transition-all duration-500 ${isHovered ? "scale-125 rotate-45" : ""}`}
            />
          </div>
          <h1
            className={`text-4xl font-bold transition-all duration-500 bg-gradient-to-br from-[#ff7d00] to-black bg-clip-text text-transparent ${isHovered ? "tracking-wide" : "tracking-normal"}`}
          >
            BowlRMS
          </h1>
          <p className="text-sm text-neutral-400">Restaurant Management Reimagined</p>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700">
            <Clock className="w-4 h-4 text-orange-400 animate-spin" />
            <span className="text-xs uppercase tracking-widest">Coming Soon</span>
          </div>
        </div>
        <div className="bg-black rounded-2xl p-6 border border-neutral-700 space-y-4 max-w-md mx-auto">
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-orange-500/30 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-orange-400" />
            </div>
          </div>
          <h2 className="text-lg font-bold text-neutral-100">Join the Waitlist</h2>
          <p className="text-xs text-neutral-400">Be the first to revolutionize your restaurant operations.</p>
          <a
            href="mailto:support@bowlrms.com?subject=BowlRMS Waitlist&body=I'd like to join the waitlist."
            className="block text-center bg-orange-500 text-sm font-semibold py-2 rounded-lg hover:bg-orange-600 transition-all text-black"
          >
            Email Us to Join
          </a>
          <p className="text-[11px] text-neutral-500 text-center">
            Or email directly:{" "}
            <a href="mailto:support@bowlrms.com" className="text-orange-400 hover:underline">
              support@bowlrms.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}