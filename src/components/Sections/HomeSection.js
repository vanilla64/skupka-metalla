import React from 'react'
import styles from "../../styles/HomeSection.module.sass"
import { motion } from "framer-motion"
import IconList from "../IconList"
import ServicesList from "../ServicesList"
import ButtonPrice from "../Buttons/ButtonPrice"

function HomeSection() {
  const titleVariants = {
    initial: {
      opacity: 0,
      y: 150
    },

    enter: {
      opacity: 1,
      y: 0
    },

    exit: {
      opacity: 0,
      y: 150
    }
  }

  return (
    <section className={styles.home}>
      <div className={styles.background} />
      <div className="container">
        <div className={styles.info}>
          <div>
            <motion.h1
              variants={titleVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.7 }}
              className={styles.title}
            >Прием, демонтаж и вывоз лома на лучших условиях в Москве</motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={styles.infoText}>
              Цены на <a className={styles.infoLink} href="/">черный металл </a> до <span className={styles.infoPrice}>32000 ₽/т.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className={styles.infoText}>
              <a className={styles.infoLink} href="/">Прием лома меди</a> до <span className={styles.infoPrice}> 690 ₽/кг.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className={styles.infoText}>
              Прием лома алюминия до <span className={styles.infoPrice}>185 ₽/кг.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className={styles.infoText}>
              <a className={styles.infoLink} href="/">Бесплатный</a> вывоз и демонтаж от 1 тонны
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className={styles.infoText}>
              <a className={styles.infoLink} href="/">Дорого</a> скупаем любой кабель
            </motion.p>

            <motion.div
              className={styles.button}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <ButtonPrice />
            </motion.div>

          </div>

          <IconList />

          <ServicesList />
        </div>

      </div>

    </section>
  )
}

export default HomeSection
