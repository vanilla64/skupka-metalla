import React from 'react'
import styles from "../../styles/sections/RoadmapSection.module.sass"
import { motion } from "framer-motion"

function ActionCard({ title, icon, isTop }) {
  const variantsTop = {
    hidden: {
      opacity: 0,
      y: -100
    },

    show: {
      opacity: 1,
      y: 0
    }
  }

 const variantsBottom = {
   hidden: {
     opacity: 0,
     y: 100
   },

   show: {
     opacity: 1,
     y: 0
   }
 }

  const PositionTop = () => (
    <div className={`${styles.action} ${styles.action_pos_top}`}
    >
      <div className={`${styles.circle} ${styles.circle_line_bottom}`}>
        <motion.div
          variants={variantsBottom}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`${styles.svgIcon} ${styles.svgIcon_pos_top}`}>
          { icon }
        </motion.div>
      </div>
      <div className={`${styles.verticalLine} ${styles.verticalLine_pos_top}`} />
      <motion.p
        variants={variantsTop}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8, delay: 0.4 }}
        className={styles.actionText}>{ title }</motion.p>
    </div>
  )

  const PositionBottom = () => (
    <motion.div className={styles.action}>
      <div className={styles.circle}>
        <motion.div
          variants={variantsTop}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.svgIcon}>
          { icon }
        </motion.div>
      </div>
      <div className={styles.verticalLine} />

      <motion.p
        variants={variantsBottom}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8, delay: 0.6 }}
        className={styles.actionText}>{ title }</motion.p>
    </motion.div>
  )

  return (
    isTop ? PositionTop() : PositionBottom()
  )
}

export default ActionCard
