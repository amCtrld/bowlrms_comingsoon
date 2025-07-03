"use client"

import { useEffect, useState } from "react"
import {
  ChefHat,
  Utensils,
  Coffee,
  Cookie,
  Pizza,
  Cake,
  Apple,
  Soup,
  Sandwich,
  IceCream,
  Grape,
  Croissant,
  Donut,
  Cherry,
} from "lucide-react"

const DOODLE_COUNT = 50

function getRandoms(count: number) {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: 15 + Math.random() * 15,
  }))
}

export default function FoodDoodles() {
  const doodles = [
    { icon: ChefHat, size: "w-6 h-6", color: "text-gray-700/40" },
    { icon: Utensils, size: "w-5 h-5", color: "text-gray-700/35" },
    { icon: Coffee, size: "w-4 h-4", color: "text-gray-700/40" },
    { icon: Cookie, size: "w-5 h-5", color: "text-gray-700/35" },
    { icon: Pizza, size: "w-6 h-6", color: "text-gray-700/40" },
    { icon: Cake, size: "w-5 h-5", color: "text-gray-700/35" },
    { icon: Apple, size: "w-4 h-4", color: "text-gray-700/40" },
    { icon: Soup, size: "w-5 h-5", color: "text-gray-700/35" },
    { icon: Sandwich, size: "w-6 h-6", color: "text-gray-700/40" },
    { icon: IceCream, size: "w-5 h-5", color: "text-gray-700/35" },
    { icon: Grape, size: "w-4 h-4", color: "text-gray-700/40" },
    { icon: Croissant, size: "w-5 h-5", color: "text-gray-700/35" },
    { icon: Donut, size: "w-6 h-6", color: "text-gray-700/40" },
    { icon: Cherry, size: "w-4 h-4", color: "text-gray-700/35" },
  ]

  const [randoms, setRandoms] = useState<Array<{
    left: number
    top: number
    animationDelay: number
    animationDuration: number
  }> | null>(null)

  useEffect(() => {
    setRandoms(getRandoms(DOODLE_COUNT))
  }, [])

  if (!randoms) return null // Prevent SSR mismatch

  return (
    <>
      <div className="absolute inset-0 overflow-hidden z-0">
        {randoms.map((rand, i) => {
          const { icon: Icon, size, color } = doodles[i % doodles.length]
          return (
            <div
              key={i}
              className={`absolute animate-float ${color}`}
              style={{
                left: `${rand.left}%`,
                top: `${rand.top}%`,
                animationDelay: `${rand.animationDelay}s`,
                animationDuration: `${rand.animationDuration}s`,
              }}
            >
              <Icon className={size} />
            </div>
          )
        })}
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); opacity: 0.8; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.6; }
        }
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}