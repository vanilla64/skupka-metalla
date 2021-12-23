import React from 'react'
import styles from '../styles/ServicesList.module.sass'
import ServiceCard from "./cards/ServiceCard"
import { motion } from "framer-motion"
import metImg1 from '../images/cards-head/1.jpg'
import metImg2 from '../images/cards-head/2.jpg'
import metImg3 from '../images/cards-head/3.jpg'
import metImg4 from '../images/cards-head/4.jpg'


function ServicesList() {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  // const item = {
  //   hidden: {
  //     x: -50,
  //     opacity: 0
  //   },
  //   show: {
  //     x: 0,
  //     opacity: 1,
  //   }
  // }

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.list}>
      <ServiceCard title={'Прием чермета'} price={'До 32000 ₽/т.'} img={metImg1} />
      <ServiceCard title={'Вывоз металла'} price={'За наш счет'} img={metImg2} />
      <ServiceCard title={'Демонтаж металла'} price={'За наш счет'} img={metImg3} />
      <ServiceCard title={'Прием цветмета'} price={'До 690 ₽/кг.'} img={metImg4} />
    </motion.ul>
  )
}

export default ServicesList
