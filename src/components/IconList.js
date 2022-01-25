import React, { useContext } from 'react'
import styles from '../styles/IconList.module.sass'
import { motion } from "framer-motion"
import TelephoneFillIcon from "./icons/TelephoneFillIcon"
import WhatsappMainScreenIcon from "./icons/WhatsappMainScreenIcon"
import MailFillIcon from "./icons/MailFillIcon"
import PhoneVibrateIcon from "./icons/PhoneVibrateIcon"
import AppContext from "../contexts/AppContext"

function IconList() {
  const { setIsPopupWithMessage } = useContext(AppContext)

  const container = {
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
  }

  const item = {
    hidden: {
      x: -50,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1,
    }
  }

  const onMailClick = () => setIsPopupWithMessage(true)

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.list}>
      <motion.li variants={item}>
        <a href="tel:+7 (800) 550-53-83"> <TelephoneFillIcon /> </a>
      </motion.li>
      <motion.li variants={item}>
        <a href="tel:+7 (991) 777-78-95"> <PhoneVibrateIcon /> </a>
      </motion.li>
      <motion.li variants={item}>
        <a
          href="https://api.whatsapp.com/send?phone=+79917777895&text=Здравствуйте! Пишу вам с сайта skupka-metalloloma.com">
          <WhatsappMainScreenIcon />
        </a>
      </motion.li>
      <motion.li onClick={onMailClick} variants={item}>
        <a href="#"> <MailFillIcon /> </a>
      </motion.li>
    </motion.ul>
  )
}

export default IconList
