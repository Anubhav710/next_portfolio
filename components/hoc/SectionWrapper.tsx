import { motion } from "framer-motion"

import { staggerContainer } from "@/utils/motion"
import { styles } from "@/styles"

const SectionWrapper = (Component: any, idName: any) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
