import React from 'react'
import styles from '../../styles/Phones.module.sass'
import { CONTACTS } from "../../constants/contacts"
import { motion } from "framer-motion"

function Phones() {
  const { MOB, CITY } = CONTACTS.PHONES
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
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.7, delay: 0.3 }}
      className={styles.phones}
    >
      <a href={`tel:${MOB}`} className={styles.link}>{ MOB }</a>
      <a href={`tel:${CITY}`} className={styles.link}>{ CITY }</a>
    </motion.div>
  )
}

export default Phones
