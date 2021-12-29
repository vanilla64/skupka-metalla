import React from 'react'
import styles from '../../styles/sections/BecomeOurClient.module.sass'
import phoneChatImg from '../../images/phone_chat.png'
import { motion } from "framer-motion"

function BecomeOurClient() {
  const variants = {
    img: {
      hidden: {
        opacity: 0,
        x: -100
      },

      show: {
        opacity: 1,
        x: 0
      }
    },

    text: {
      hidden: {
        opacity: 0,
        y: -100
      },

      show: {
        opacity: 1,
        y: 0
      }
    },

    container: {
      hidden: {
        opacity: 0
      },
      show: {
        opacity: 1,
        transition: {
          delayChildren: 0.5,
          staggerChildren: 0.15
        }
      }
    },

    item: {
      hidden: {
        y: 50,
        opacity: 0
      },
      show: {
        y: 0,
        opacity: 1,
      }
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.img
            variants={variants.img}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            className={styles.img} src={phoneChatImg} alt=""/>
          <motion.div
            variants={variants.text}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.7, delay: 0.2 }}
            className={styles.textContent}>
            <h3 className={styles.title}>Станьте нашим клиентом!</h3>
            <a className={styles.phone} href={'tel:+7 (999) 99 99'}>+7 (999) 999-99-99</a>
            <h3 className={styles.title}>Не хотите звонить?</h3>
            <p
              className={styles.text}>
              Напишите в
              <span className={styles.chat}> Онлайн чат</span>,
              <span className={styles.whatsApp}> Whats App</span>,
              <span className={styles.telegram}> Telegram</span>
            </p>
            <motion.div
              variants={variants.container}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              className={styles.links}>
              <motion.a
                variants={variants.item}
                // initial="hidden"
                // whileInView="show"
                // transition={{ duration: 0.6 }}
                className={`${styles.link} ${styles.link_bg_orange}`} href="/">Онлайн чат</motion.a>
              <motion.a
                variants={variants.item}
                // initial="hidden"
                // whileInView="show"
                // transition={{ duration: 0.6 }}
                className={`${styles.link} ${styles.link_bg_green}`} href="/">Whats App</motion.a>
              <motion.a
                variants={variants.item}
                // initial="hidden"
                // whileInView="show"
                // transition={{ duration: 0.6 }}
                className={`${styles.link} ${styles.link_bg_blue}`} href="/">Telegram</motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BecomeOurClient
