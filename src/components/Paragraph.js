import React from 'react'
import styles from '../styles/Paragraph.module.sass'
import { motion } from "framer-motion"

function Paragraph({ text }) {
  return (
    <div className="container">
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className={styles.paragraph}>{ text }</motion.p>
    </div>
  )
}

export default Paragraph
