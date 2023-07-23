"use client"
import React from "react"
import { Tilt } from "react-tilt"

import { services } from "@/constants"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "@/utils/motion"
import { styles } from "@/styles"
import Image from "next/image"
import { SectionWrapper } from "./hoc"

const ServiceCard = ({ icon, title, index }: any) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5  px-12 min-h-[280px] flex flex-col items-center justify-evenly">
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>INTRODUCTION</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rerum,
        possimus blanditiis quisquam ducimus consequatur voluptas. Nisi
        consequatur voluptates minima, dolore eius sit? Rem neque corporis
        libero deleniti cum? In, autem aliquam. Repellendus, totam, deleniti
        commodi nihil optio adipisci officiis repudiandae corrupti quibusdam
        quod debitis, amet id fuga ipsa recusandae!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} {...services} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
