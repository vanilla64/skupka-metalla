import React from 'react'
import styles from '../styles/WhatWeTakeList.module.sass'
import WhatWeTakeCard from "./cards/WhatWeTakeCard"
import blackIng from '../images/what-we-take/1.jpg'
import cupImg from '../images/what-we-take/2.jpg'
import aluImg from '../images/what-we-take/3.jpg'
import latImg from '../images/what-we-take/4.jpg'
import pbImg from '../images/what-we-take/5.jpg'
import nikImg from '../images/what-we-take/6.jpg'
import cableImg from '../images/what-we-take/7.jpg'
import batteryImg from '../images/what-we-take/8.jpg'
import { motion } from "framer-motion"

function WhatWeTakeList({ children }) {

  function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <ul
      className={styles.list}>
      <FadeInWhenVisible>
        <WhatWeTakeCard
          items={['Смешанный лом', 'Рельсовый лом', 'Чугун', 'Балки', 'Швеллер', 'Бытовой лом']}
          title={'Черный металлолом'}
          img={blackIng}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <WhatWeTakeCard
          items={['Блеск', 'Кусок', 'Шина', 'Разносортный', 'Радиаторы']}
          title={'Медная группа'}
          img={cupImg}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <WhatWeTakeCard
          items={['Электротехнический', 'Пишевой', 'Профиль', 'Разносортный', 'Радиаторы', 'Стружка']}
          title={'Алюминиевая группа'}
          img={aluImg}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <WhatWeTakeCard
          items={['Латунь', 'Стружка', 'Радиаторы']}
          title={'Латунная группа'}
          img={latImg} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <WhatWeTakeCard
          items={['Свинец чистый', 'Переплав', 'Грузики', 'Аккумулятор (эбонит)', 'Аккумулятор (гель)']}
          title={'Свинцовая группа'}
          img={pbImg} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <WhatWeTakeCard
          items={['Нержавейка Ni 10%', 'Нержавейка Ni 8%', 'Нержавейка Ni 6%']}
          title={'Никелевая группа'}
          img={nikImg}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <WhatWeTakeCard
          items={['Силовой (медь)', 'Силовой (алюминий)', 'Слаботочка (медь)', 'Слаботочка (алюмин)', 'Mix']}
          title={'Кабель'}
          img={cableImg}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <WhatWeTakeCard
          items={['Слитые', 'Гелевые', 'Тяговые', 'Эбонитовые', 'Автомобильные']}
          title={'Аккумуляторы'}
          img={batteryImg} />
      </FadeInWhenVisible>
    </ul>
  )
}

export default WhatWeTakeList
