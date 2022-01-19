import React from 'react'
import AboutUsSection from "./AboutUsSection"
import SectionTitle from "./SectionTitle"
import styles from "../../styles/sections/AboutUsSection.module.sass"
import { motion } from "framer-motion"
import chermetImg from "../../images/chermet.png"

function ExportSection() {
  return (
    <AboutUsSection>
      <SectionTitle title={'Бесплатный вывоз металлолома'} divider />

      <div className={styles.wrapper}>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.text}>
          Вывозим металлолом от 1 тонны за свой счет с любого объекта, т.к. благодаря большому покрытию собственных приемных
          пунктов, расходы на логистику приводятся к минимуму. Если вы находитесь близко, вы всегда можете прийти в
          ближайший пункт приема и сдать лом лично. Поработав с нами в первый раз вы убедитесь, что лучшего предложения
          на рынке, чем у нас – вы не найдете. Готовы сотрудничать с вами уже сейчас, если у вас есть лом! Звоните!
        </motion.p>

        <motion.img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.img} src={chermetImg} alt="Truck"/>
      </div>
    </AboutUsSection>
  )
}

export default ExportSection
