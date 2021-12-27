import React from 'react'
import logo from '../images/logo-black.svg'
import styles from '../styles/Logo.module.sass'
import { motion } from "framer-motion"

function Logo() {
  const variants = {
    hidden: {
      opacity: 0,
      y: -100
    },

    show: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.img
      variants={variants}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.8 }}
      className={styles.logo}
      src={logo} alt="Logo"/>
  )
}

export default Logo
