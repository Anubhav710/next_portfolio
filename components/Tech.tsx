import { technologies } from "@/constants"
import { styles } from "@/styles"
import React from "react"
import BallCanvas from "./canvas/BallCanvas"

const Tech = () => {
  return (
    <div className={`${styles.padding} max-w-[82rem] mx-auto  `}>
      <div className="flex flex-wrap justify-center gap-10 ">
        {technologies.map((tech) => (
          <div key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tech
