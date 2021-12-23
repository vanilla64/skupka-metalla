import React from 'react'
import styles from '../../styles/SectionTitle.module.sass'
import { motion } from "framer-motion"

function SectionTitle({ title }) {
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

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.title}>{ title }</h2>
      <div className={styles.divider}/>
    </motion.div>
  )
}

export default SectionTitle
