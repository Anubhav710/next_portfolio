import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

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
  return (
    <html lang="en">
      <body
        className={`${inter.className}  scrollbar-track-gray-400/20 scrollbar-thumb-[#915eff]/80  scrollbar-thin `}
      >
        {children}
      </body>
    </html>
  )
}
