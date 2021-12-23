import React from 'react'
import styles from '../../styles/cards/ServiceCard.module.sass'
import { motion } from "framer-motion"

function ServiceCard({ title, price, img }) {
  const classes = {
    card: {
      backgroundImage: `url(${img})`,
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      y:-50
    },
    show: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.li variants={item} className={styles.card} style={classes.card}>
      <h3 className={styles.title}>{ title }</h3>
      <p className={styles.text}>{ price }</p>
    </motion.li>
  )
}

export default ServiceCard
