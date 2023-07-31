"use client"
import SplashScreen from "@/components/SplashScreen"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anubhav's Portfolio",
  description:
    "Discover the web development journey and professional expertise of Anubhav, a seasoned web developer.",
  icons: {
    icon: "/Anubhav.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (isLoading) return
  }, [isLoading])
  return (
    <html lang="en">
      {isLoading && isHome ? (
        <SplashScreen />
      ) : (
        <body
          className={`${inter.className}  scrollbar-track-gray-400/20 scrollbar-thumb-[#915eff]/80  scrollbar-thin `}
        >
          {children}
        </body>
      )}
    </html>
  )
}
