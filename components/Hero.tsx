"use client"
import React from "react"
import { motion } from "framer-motion"
import { Style } from "util"
import { styles } from "@/styles"
import ComputerCanvas from "./canvas/ComputerCanvas"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative  w-full h-screen mx-auto  ">
      <div
        className={`${styles.paddingX}  absolute inset-0 top-[120px] max-w-[82rem] mx-auto flex  items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I m <span className="text-[#915eff]">Anubhav</span>
          </h1>
          <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            I develop 3d visuals, user <br className="sm:block hidden" />
            interface and web applications
          </p>
        </div>
      </div>
      <ComputerCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full mb-1 bg-secondary "
            />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero
