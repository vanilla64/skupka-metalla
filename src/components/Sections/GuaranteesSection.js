import React from 'react'
import styles from '../../styles/sections/GuaranteesSection.module.sass'
import SectionWithOrangeBorder from "./SectionWithOrangeBorder"
import SectionTitle from "./SectionTitle"
import GuaranteesCard from "../cards/GuaranteesCard"
import ClipboardCheckIconBig from "../icons/ClipboardCheckIconBig"
import ThumbsUpIcon from "../icons/ThumbsUpIcon"
import ChatSquareIcon from "../icons/ChatSquareIcon"
import PeopleBigIcon from "../icons/PeopleBigIcon"
import CashCoinIcon from "../icons/CashCoinIcon"
import TruckFlatbedIcon from "../icons/TruckFlatbedIcon"
import { motion } from "framer-motion"

function GuaranteesSection() {
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
    <SectionWithOrangeBorder>
      <SectionTitle title={'Гарантии при работе с нами'} divider />

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        className={styles.list}>
        <GuaranteesCard
          title={'Сертифицированные весы'}
          text={'Весы проходят систематично проходят проверку и пломбируются по ГОСТу.'}
          icon={<ClipboardCheckIconBig />} />
        <GuaranteesCard
          title={'Профессиональные бригады'}
          text={'Штат профессиональных рабочих по демонтажу и вывозу металлолома.'}
          icon={<ThumbsUpIcon />} />
        <GuaranteesCard
          title={'Отзывы клиентов'}
          text={'Мы работаем открыто и честно. Имеем тысячи отзывов на самых разных площадках.'}
          icon={<ChatSquareIcon />} />
        <GuaranteesCard
          title={'Команда'}
          text={'Опытные консультанты и бригадиры с богатым опытом с сфере черных и цветных металлов.'}
          icon={<PeopleBigIcon />} />
        <GuaranteesCard
          title={'Оплата'}
          text={'Мы платим сразу после взвешивания любым удобным для вас способом и всегда идем навстречу клиенту.'}
          icon={<CashCoinIcon />} />
        <GuaranteesCard
          title={'Логистика'}
          text={'Выезжаем сразу после подтверждения клиента благодарят автоматизированной системе логистики и персонала.'}
          icon={<TruckFlatbedIcon color={'#000'} size={40} />} />
      </motion.ul>
    </SectionWithOrangeBorder>
  )
}

export default GuaranteesSection
