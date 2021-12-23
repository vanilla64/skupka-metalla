import React from 'react'
import { motion } from "framer-motion"
import styles from "../../styles/HeaderSlide.module.sass"
import ButtonPrice from "../Buttons/ButtonPrice"

function HeaderSlide({ img, title, subtitle, text }) {

  const variantsTitle = {
    initial: {
      opacity: 0,
      y: '-150px'
    },

    enter: {
      opacity: 1,
      y: 0
    },

    exit: {
      opacity: 0.1,
      y: '-150px'
    }
  }

  const variantsSubtitle = {
    initial: {
      opacity: 0,
      x: '-150px'
    },

    enter: {
      opacity: 1,
      x: 0,
    },

    exit: {
      opacity: 0.1,
      x: '150px'
    }
  }

  const variantsButton = {
    initial: {
      opacity: 0,
      y: '200px'
    },

    enter: {
      opacity: 1,
      y: 0,
    },

    exit: {
      opacity: 0,
      y: '200px'
    }
  }

  return (
    <div style={{ backgroundImage: `url(${img})` }} className={styles.slide}>
      <motion.h1
        className={styles.title}
        variants={variantsTitle}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{ type: 'spring', bounce: 0.6, duration: 1, delay: 0.2 }}
      >{ title }</motion.h1>
      <motion.p
        className={styles.subTitle}
        variants={variantsSubtitle}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{ type: 'spring', bounce: 0.6, duration: 1, delay: 0.5 }}
      >{ subtitle }</motion.p>
      <motion.p
        className={styles.text}
        variants={variantsSubtitle}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{ type: 'spring', bounce: 0.6, duration: 1, delay: 0.7 }}
      >{ text }</motion.p>

      <motion.div
        variants={variantsButton}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{ type: 'spring', bounce: 0.4, duration: 1, delay: 0.8 }}
      >
        <ButtonPrice />
      </motion.div>
    </div>
  )
}

export default HeaderSlide
