import React from 'react'
import styles from '../../styles/cards/GuaranteesCard.module.sass'
import { motion } from "framer-motion"

function GuaranteesCard({ icon, title, text }) {
  const item = {
    hidden: {
      y: 50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
    }
  }

  return (
    <motion.li
      variants={item}
      className={styles.card}>
      <div className={styles.iconContainer}>
        { icon }
      </div>
      <h3 className={styles.title}>{ title }</h3>
      <p className={styles.text}>{ text }</p>
    </motion.li>
  )
}

export default GuaranteesCard
