import React from 'react'
import MainLayout from "../layouts/MainLayout"
import HomeSection from "../components/Sections/HomeSection"
import PageTitle from "../components/PageTitle"
import ContactUsMiniSection from "../components/Sections/ContactUsMiniSection"
import image from '../images/main-bg/2.jpg'
import AboutUsSection from "../components/Sections/AboutUsSection"
import styles from "../styles/sections/AboutUsSection.module.sass"
import { motion } from "framer-motion"
import DismantlingServices from "../components/Sections/DismantlingServices"

function DismantlingPage() {
  return (
    <MainLayout>
      <HomeSection />
      <PageTitle title={'Демонтаж и вывоз металлоконструкций на металлолом в Москве и МО'} />

      <AboutUsSection>
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${styles.text} ${styles.text_wide}`}>
              Если Вам необходимо быстро убрать с территории отслужившие свой век здания или оборудование, то такая
              наша услуга, как демонтаж и вывоз металл конструкций на металлолом в Москве и МО, помогут осуществить это!
              Мы не только решим эту проблему, но и заплатим Вам за вывоз металла в соответствии с действующим прайсом!
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${styles.text} ${styles.text_wide}`}>
              Демонтаж и вывоз металлолома – востребованная услуга в сфере промышленности и бизнеса. Она требует
              высокого профессионализма, ответственности и внимательности. Демонтаж металлолома включает в себя работу
              с конструкциями любого типа. В процессе выполнения задачи используется тяжелая техника, поэтому важен
              опыт оператора, который осуществляет демонтаж и вывоз металла.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${styles.text} ${styles.text_wide}`}>
              Компания «Стандарт» готова выполнить задачи любой сложности на «отлично». Демонтаж металлоконструкций
              осуществляется нашими специалистами с высокой скоростью и соблюдением требований безопасности. Каждый
              сотрудник имеет все необходимые допуски. Работа выполняется качественно и аккуратно. Поэтому в дальнейшем
              возможна сдача металлолома в пункты приема. Но, как вариант, какие-то детали можно использовать в
              производстве.
            </motion.p>
          </div>


          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.img} src={image} alt="Truck"/>
        </div>
      </AboutUsSection>

      <DismantlingServices />

      <ContactUsMiniSection />
    </MainLayout>
  )
}

export default DismantlingPage
