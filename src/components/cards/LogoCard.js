import React from 'react'
import { motion } from "framer-motion"

function LogoCard({ img }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 50
    },

    show: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <li>
      <motion.img
        variants={variants}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5 }}
        src={img} alt="Logo"/>
    </li>
  )
}

export default LogoCard
