import React, { useContext } from 'react'
import styles from '../../styles/sections/BecomeOurClient.module.sass'
import phoneChatImg from '../../images/phone_chat.png'
import { motion } from "framer-motion"
import AppContext from "../../contexts/AppContext"

function BecomeOurClient() {
  const { setIsPopupWithMessage } = useContext(AppContext)

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

  const onMailClick = () => setIsPopupWithMessage(true)

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
            <a className={styles.phone} href={'tel:+7 (991) 777-78-95'}>+7 (991) 777-78-95</a>
            <h3 className={styles.title}>Не хотите звонить?</h3>
            <p
              className={styles.text}>
              Напишите в
              <span className={styles.chat}> Почта</span>,
              <span className={styles.whatsApp}> Whats App</span>,
              <span className={styles.telegram}> Viber</span>
            </p>
            <motion.div
              variants={variants.container}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6 }}
              className={styles.links}>
              <motion.div
                onClick={onMailClick}
                variants={variants.item}
                // initial="hidden"
                // whileInView="show"
                // transition={{ duration: 0.6 }}
                className={`${styles.link} ${styles.link_bg_orange}`}>Почта</motion.div>
              <motion.a
                variants={variants.item}
                // initial="hidden"
                // whileInView="show"
                // transition={{ duration: 0.6 }}
                className={`${styles.link} ${styles.link_bg_green}`} href="https://api.whatsapp.com/send?phone=+79917777895&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D0%B2%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20skupka-metalloloma.com" target="_blank">Whats App</motion.a>
              <motion.a
                variants={variants.item}
                // initial="hidden"
                // whileInView="show"
                // transition={{ duration: 0.6 }}
                className={`${styles.link} ${styles.link_bg_blue}`} href="viber://chat?number=%2B79917777895">Viber</motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BecomeOurClient
