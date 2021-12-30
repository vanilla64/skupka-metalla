import React from 'react'
import logo from '../images/logo-black.svg'
import styles from '../styles/Logo.module.sass'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

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
    <Link to={'/'}>
      <motion.img
        variants={variants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.8 }}
        className={styles.logo}
        src={logo} alt="Logo"/>
    </Link>
  )
}

export default Logo
