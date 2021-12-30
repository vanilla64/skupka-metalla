import React from 'react'
import styles from '../styles/PageTitle.module.sass'
import { motion } from "framer-motion"

function PageTitle({ title }) {
  return (
    <div className={'container'}>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={styles.title}>{ title }</motion.h1>
    </div>
  )
}

export default PageTitle
