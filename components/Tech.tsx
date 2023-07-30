"use client"
import { technologies } from "@/constants"
import { styles } from "@/styles"
import React from "react"
import BallCanvas from "./canvas/BallCanvas"
import { SectionWrapper } from "./hoc"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "@/utils/motion"

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-10"
      >
        As a proficient front-end developer, my expertise extends to working
        with cutting-edge technologies such as Next.js and Tailwind CSS, adeptly
        crafting responsive and visually appealing web applications. My command
        over Git and GitHub underscores my collaborative spirit and effective
        version control, while my skills in Framer Motion enable dynamic
        animation integration. My foundational strength in HTML, CSS, and
        JavaScript, bolstered by an understanding of UX/UI principles, ensures
        creation of accessible and user-friendly designs.
      </motion.p>
      <div className={`${styles.padding} max-w-[82rem] mx-auto  `}>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((tech) => (
            <div className="w-28 h-28" key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "skill")
