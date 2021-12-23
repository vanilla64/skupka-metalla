import React from 'react'
import styles from '../styles/IconList.module.sass'
import TelegramIcon from "./icons/TelegramIcon"
import { motion } from "framer-motion"

function IconList() {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: {
      x: -50,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.list}>
      <motion.li variants={item}>
        <TelegramIcon/>
      </motion.li>
      <motion.li variants={item}>
        <TelegramIcon/>
      </motion.li>
      <motion.li variants={item}>
        <TelegramIcon/>
      </motion.li>
      <motion.li variants={item}>
        <TelegramIcon/>
      </motion.li>
      <motion.li variants={item}>
        <TelegramIcon/>
      </motion.li>
      <motion.li variants={item}>
        <TelegramIcon/>
      </motion.li>
    </motion.ul>
  )
}

export default IconList
