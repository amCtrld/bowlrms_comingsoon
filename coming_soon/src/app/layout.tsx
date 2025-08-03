import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "BowlRMS | Coming Soon",
  description: "Next-gen tools for efficient restaurant operations.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "BowlRMS | Coming Soon",
    description: "Reimagining restaurant management. Join the waitlist.",
    url: "https://bowlrms.com",
    siteName: "BowlRMS",
    images: [
      {
        url: "https://bowlrms.com/images/bowlRMSImage.png", // use full URL
        width: 1200,
        height: 630,
        alt: "BowlRMS Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BowlRMS | Coming Soon",
    description: "Reimagining restaurant management. Join the waitlist.",
    images: ["https://bowlrms.com/images/bowlRMSImage.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
