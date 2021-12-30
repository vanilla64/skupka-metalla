import React from 'react'
import styles from '../../styles/sections/RoadmapSection.module.sass'
import SectionTitle from "./SectionTitle"
import ActionCard from "../cards/ActionCard"
import TelephoneIcon from "../icons/TelephoneIcon"
import SignalIcons from "../icons/SignalIcons"
import TruckFlatbedIcon from "../icons/TruckFlatbedIcon"
import ToolsIcon from "../icons/ToolsIcon"
import ScaleIcon from "../icons/ScaleIcon"
import CashIcon from "../icons/CashIcon"
import { motion } from "framer-motion"

function RoadmapSection() {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100
    },

    show: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section className={styles.section}>
      <SectionTitle title={'Как сдать металлолом?'} divider whiteText />

      <motion.p
        variants={variants}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5, delay: 0.3 }}
        className={styles.subtitle}>
        Компания «ООО Стандарт» более 10 лет оказывает услуги вывоз и демонтажа черных и цветных металлов. Мы имеем собственный логистический центр и выезд происходит в течении пары часов.
      </motion.p>

      <div className={styles.actions}>

        <ActionCard
          title={'Заявка по телефону или через сайт'}
          icon={<TelephoneIcon />}
        />

        <ActionCard
          title={'Обговариваем условия и цену на ваш объем'}
          icon={<SignalIcons />}
          isTop={true}
        />

        <ActionCard
          title={'Приезжают наши сотрудники и необходимая техника'}
          icon={<TruckFlatbedIcon />}
        />

        <ActionCard
          title={'Демонтируем, режем, грузим лом'}
          icon={<ToolsIcon />}
          isTop={true}
        />

        <ActionCard
          title={'Взвешиваем лом'}
          icon={<ScaleIcon />}
        />

        <ActionCard
          title={'Оплачиваем наличными или безналично'}
          icon={<CashIcon />}
          isTop={true} />

      </div>
    </section>
  )
}

export default RoadmapSection
