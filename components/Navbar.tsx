"use client"
import { styles } from "@/styles"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { logo, menu, close } from "@/public/images"
import { navLinks } from "@/constants"
const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      } `}
    >
      <div className="w-full flex justify-between items-center max-w-[82rem] mx-auto px-2">
        <Link
          href="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src={logo}
            alt="logo"
            height={50}
            width={50}
            className="object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Anubhav &nbsp;
            <span className="block lg:inline">| Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 sm:items-center items-center ">
          {navLinks.map((link) => (
            <li
              key={link.key}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link href={link.id}>{link.title}</Link>
            </li>
          ))}
          <button
            className=" border border-[#915eff] rounded-md px-4 py-2 hover:bg-[#915eff] transition-all duration-700 "
            onClick={() => window.open("/Resume.png")}
          >
            Resume
          </button>
        </ul>

        {/* Mobile Navigation Bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            width={32}
            height={32}
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-center flex-col gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.key}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle)
                  }}
                >
                  <Link href={link.id}>{link.title}</Link>
                </li>
              ))}
              <button
                className="text-white"
                onClick={() => window.open("/Resume.png")}
              >
                Resume
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
