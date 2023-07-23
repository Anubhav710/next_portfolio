import { technologies } from "@/constants"
import { styles } from "@/styles"
import React from "react"
import BallCanvas from "./canvas/BallCanvas"

const Tech = () => {
  return (
    <div className={`${styles.padding} max-w-[82rem] mx-auto  `}>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tech
