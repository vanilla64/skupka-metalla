import React from 'react'
import styles from '../../styles/SectionTitle.module.sass'
import { motion } from "framer-motion"

function SectionTitle({ title, divider, whiteText }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100
    },

    show: {
      opacity: 1,
      y: 0
    }
  }

  const classes = {
    title: whiteText
      ? `${styles.title} ${styles.title_text_white}`
      : styles.title,
    divider: whiteText
      ? `${styles.divider} ${styles.divider_color_white}`
      : styles.divider
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.5 }}
    >
      <h2 className={classes.title}>{ title }</h2>
      { divider && <div className={classes.divider}/> }
    </motion.div>
  )
}

export default SectionTitle
