import React from 'react'
import AboutUsSection from "./AboutUsSection"
import SectionTitle from "./SectionTitle"
import styles from "../../styles/sections/AboutUsSection.module.sass"
import { motion } from "framer-motion"
import truckImg from "../../images/truck.png"
import pointsImg from "../../images/demontaj.png"

function SectionWithImage() {
  return (
    <AboutUsSection>
      <SectionTitle title={'Принимаем лом с 2016 года'} divider />

      <div className={styles.wrapper}>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.text}>
          NNNNN – оптовая металлозаготовительная и демонтажная организация, которая демонтирует, принимает и
          заготавливает металлолом с 2016г. За относительно короткое время нашей деятельности на рынке металлолома,
          благодаря честной и плодотворной работе наших специалистов и работников, а так же неравнодушным отношением к
          своим клиентам, нам удалось завоевать доверие многочисленных клиентов – от частных лиц до крупных заводов и
          холдингов, которые сдают нам металлолом на постоянной основе. Мы являемся крупной оптовой компанией, которая
          может предлагать лучшие условия на рынке заготовки металлолома, т.к. накопленный на наших пунктах приема
          металлолом напрямую поставляется на перерабатывающие металл заводы ежечасно.
        </motion.p>

        <motion.img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.img} src={truckImg} alt="Truck"/>
      </div>

      <SectionTitle title={'Цель компании'} divider />
      <div className={styles.wrapper}>

        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.img} src={pointsImg} alt="Points"/>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.text}>
          Мы работаем на объем и применяем минимальную наценку, так как основной целью компании является привлечение
          максимального количества клиентов. Всегда готовы помочь своим клиентам, если им нужна дополнительная помощь,
          например демонтаж сложной металлоконструкции или опасного объекта, вывоз большого количества металла за
          сжатые сроки, недостаток рабочей силы, потребность в конкретных специалистах. Сагамет имеет все ресурсы
          для решения этих задач, причем 90% демонтажных работ мы производим бесплатно, в случае забора лома на наши
          приемные пункты. Оплату за принимаемый лом производим моментально, после взвешивания, сразу после приема
          металлолома на кассе, либо переводим после видео фиксации процесса взвешивания.
        </motion.p>
      </div>
    </AboutUsSection>
  )
}

export default SectionWithImage
