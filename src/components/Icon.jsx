import { motion } from "framer-motion"
import { animationHoverClick } from "../animations"
import { Tooltip } from "@chakra-ui/react"

export const Icon = ({ children, label = '', onClick }) => {
  return (
    <Tooltip label={label} hasArrow>
      <div onClick={onClick}>
        <motion.div
          className="hover:opacity-70 cursor-pointer"
          variants={animationHoverClick}
          whileHover='hover'
          whileTap='click'
          >
          { children }
        </motion.div>
      </div>
    </Tooltip>
  )
}