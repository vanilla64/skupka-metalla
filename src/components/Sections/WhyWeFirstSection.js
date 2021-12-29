import React from 'react'
import styles from '../../styles/sections/WhyWeFirstSection.module.sass'
import SectionTitle from "./SectionTitle"
import truckImg from '../../images/pic-serv-2.png'
import WhyWeFirstCard from "../cards/WhyWeFirstCard"
import ClipboardCheckIcon from "../icons/ClipboardCheckIcon"
import { motion } from "framer-motion"
import CashStackIconOrange from "../icons/CashStackIconOrange"
import ChatIcon from "../icons/ChatIcon"
import PeopleIcon from "../icons/PeopleIcon"
import TruckOrange from "../icons/TruckOrange"
import TruckBigOrange from "../icons/TruckBigOrange"

function WhyWeFirstSection() {
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

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle title={'Почему мы первые на рынке'} divider whiteText />

        <div className={styles.wrapper}>
          <img className={styles.img} src={truckImg} alt="Truck"/>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            className={styles.colRight}>
            <WhyWeFirstCard
              icon={<ClipboardCheckIcon />}
              title={'Обратная связь'}
              text={'Автоматизированный кол. центр не заставит ждать'} />

            <WhyWeFirstCard
              icon={<CashStackIconOrange />}
              title={'Оплата'}
              text={'Оплата происходит моментально и любым удобным для вас способом'} />

            <WhyWeFirstCard
              icon={<ChatIcon />}
              title={'Консультация'}
              text={'Помогаем с оценкой вашего металлолома по одной фотографии'} />

            <WhyWeFirstCard
              icon={<PeopleIcon />}
              title={'Команда'}
              text={'Наши бригады работают с строгими саблюдениями техники безопасности'} />

            <WhyWeFirstCard
              icon={<TruckOrange />}
              title={'Логистика'}
              text={'Наш логистический центр моментально реагирует на заявки выезда'} />

            <WhyWeFirstCard
              icon={<TruckBigOrange />}
              title={'Техника'}
              text={'Наш автопарк состит из более чем 150 единиц техники'} />
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export default WhyWeFirstSection
