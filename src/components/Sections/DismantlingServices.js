import React from 'react'
import styles from '../../styles/sections/DismantlingServices.module.sass'
import { motion } from "framer-motion"

function DismantlingServices() {
  const showLeft = {
    hidden: {
      opacity: 0,
      x: -50
    },

    show: {
      opacity: 1,
      x: 0
    }
  }

  const showRight = {
    hidden: {
      opacity: 0,
      x: 50
    },

    show: {
      opacity: 1,
      x: 0
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h3
          variants={showLeft}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.4 }}
          className={styles.title}>Мы выполняем:</motion.h3>

        <motion.ul
          variants={showLeft}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.4 }}
          className={styles.list}>
          <li>Демонтаж промышленного и производственного оборудования;</li>
          <li>Демонтаж металлоконструкций на металлолом;</li>
          <li>Вывоз лома цветного и черного металлов, входящих в конструкцию.</li>
        </motion.ul>

        <motion.h3
          variants={showRight}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.4 }}
          className={styles.title}>С нами услуги демонтажа – это удобно, безопасно, надежно и с гарантией! Для Вашего комфорта мы:</motion.h3>

        <motion.ul
          variants={showRight}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.4 }}
          className={styles.list}>
          <li>Работаем с физлицами и организациями;</li>
          <li>Районы возможного выезда – вся Москва и МО;</li>
          <li>Своя бригада опытных специалистов (водителей, грузчиков, резчиков по металлу);</li>
          <li>Собственный автопарк более 10 единиц оборудования: от газелей до ломовозов с грейфером и фур;</li>
          <li>Простая схема работы: заявка-оценщик-составление договора-смета-начало демонтажа;</li>
          <li>Оплата за лом осуществляется по безналичному расчету, наличными деньгами, на карту QIVI , на карту через ТКБ Банк ПАО.</li>
        </motion.ul>

        <motion.h3
          variants={showLeft}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.4 }}
          className={styles.title}>
          Мы обеспечим полную безопасность проведения технически сложных работ и оперативность выполнения демонтажа
          конструкций на металлолом.Мы знаем, как быстро очистить территорию от ненужного оборудования, профессионально
          работаем с конструкциями любого типа и назначения: от торговых ларьков до крупных промышленных объектов.
          Легко разберем и вывезем:
        </motion.h3>

        <motion.ul
          variants={showLeft}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.4 }}
          className={styles.list}>
          <li>Мостовые сооружения, трубы и резервуары;</li>
          <li>Металлические части остановок общественного транспорта, торговых павильонов и производственных цехов;</li>
          <li>Отслужившее свое списанное оборудование.</li>
        </motion.ul>

        <motion.p
          variants={showRight}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.4 }}
        >
          Просто свяжитесь с нами любым удобным способом: через формы и чат на сайте, по телефону и электронной почте,
          и мы оперативно произведем демонтаж, резку и вывоз металл конструкций.Мы поможем Вам заработать на том, что
          создает неудобство на Вашей территории.
        </motion.p>
      </div>
    </section>
  )
}

export default DismantlingServices
