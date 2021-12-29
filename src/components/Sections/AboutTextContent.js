import React from 'react'
import SectionTitle from "./SectionTitle"
import AboutUsSection from "./AboutUsSection"
import styles from "../../styles/sections/AboutUsSection.module.sass"
import { motion } from "framer-motion"
import truckImg from "../../images/truck.png"
import girlImg from '../../images/demontaj.png'
import chermetImg from '../../images/chermet.png'
import tsvetMet from '../../images/tsvetmet-2.png'


function AboutTextContent() {
  return (
    <>
      <AboutUsSection>
        <SectionTitle title={'Вывоз металлолома'} divider />

        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${styles.text} ${styles.text_wide}`}>
              Рынок изделий из металла – это одна из наиболее распространенных сфер современного строительства и ремонта.
              Металлические изделия актуальны и востребованы, а для их изготовления требуется постоянное наличие металла,
              как сырья. Именно поэтому, среди прочих услуг, которые предоставляет своим клиентам наша компания, прием лома
              черных металлов пользуется спросом среди клиентов.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${styles.text} ${styles.text_wide}`}>
              В автопарке нашей компании есть огромное количество транспорта, предназначенного для вывоза металлолома и
              других материалов. В штате сотрудников работает большое количество грузчиков и стропальщиков, которые могут
              аккуратно погрузить и вывезти любое количество металла. Во время проведения строительных или ремонтных работ,
              часто скапливается большое количество металлолома или отработанных элементов, которые не представляют
              уже никакой ценности для владельца. В некоторых вида производства таких предметов скапливается огромное
              количество, которое необходимо аккуратно и быстро вывозить, чтобы не создавать лишних помех и нарушений
              техники пожарной безопасности.
            </motion.p>
          </div>


          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.img} src={truckImg} alt="Truck"/>
        </div>
      </AboutUsSection>

      <AboutUsSection>
        <SectionTitle title={'Демонтаж металлоконструкций'} divider />

        <div className={styles.wrapper}>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.text}>
            Выполнить демонтаж металлоконструкций – это далеко не одно и то же, что сломать конструкцию. Когда речь идет
            о габаритных сооружениях, то демонтаж должен быть тщательно продуман и выполняться он будет не сразу,
            а поэтапно. Огромное количество строительного мусора, который скапливается на площадках, где возводятся
            сооружения или здания, не только мешает эффективной и быстрой работе, но и может представлять опасность
            для здоровья и даже жизни строителей. Металлолом – это одна из разновидностей такого строительного мусора,
            вывезти который у владельца объекта часто нет возможности или он просто не хочет тратить на это свое время.
            Услуга нашей компании, связанная с вывозом металлолома, не только облегчает, но и делает работу на объекте
            более комфортной.
          </motion.p>

          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.img} src={girlImg} alt="Girl"/>
        </div>
      </AboutUsSection>

      <AboutUsSection>
        <SectionTitle title={'Прием лома черных металлов'} divider />

        <div className={styles.wrapper}>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.img} src={chermetImg} alt="Girl"/>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.text}>
            Каким образом сотрудничество с нашей компанией в этом вопросе, удобно и выгодно для наших клиентов?
            Наши расценки на лом черных металлов, являются максимально выгодными для большинства клиентов, которые
            не рассматривают другие компании в качестве партнеров. Если речь идет о демонтаже сложных металлических
            конструкций или порезке металла на части для более удобной доставки, наши специалисты выполнят эту работу
            быстро и эффективно. Если наш постоянный клиент сдает лом черных металлов регулярно, мы готовы платить ему
            более высокую цену, поэтому понятие скидки в нашей компании – это не снижение стоимости, а ее повышение,
            что звучит довольно привлекательно для каждого. Цветной металл ценился во все времена, поэтому его
            стоимость не снижается и сегодня. Не все изделия из цветного металла являются долговечными, поэтому со
            временем, под влиянием различных внешних факторов, они приходят в негодность и становятся ломом.
          </motion.p>
        </div>
      </AboutUsSection>

      <AboutUsSection>
        <SectionTitle title={'Прием лома цветных металлов'} divider />

        <div className={styles.wrapper}>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.text}>
            Разнообразие цветных металлов просто впечатляет, поэтому прежде чем принять такой лом у населения или
            юридических лиц, наши специалисты точно устанавливают к какому именно классу относится продукция.
            Какие именно виды металла мы принимаем по выгодной стоимости? Расценки на прием лома цветных металлов
            фиксированные, но могут быть изменены в пользу нашего клиента, в зависимости от того, какой объем он
            сдает и как часто с нами сотрудничает. Любое строительство подразумевает не только возведение и
            монтаж сооружений и конструкций, но и демонтаж различных устаревших элементов здания или строительной
            площадки. Но выполнение демонтажа – это далеко не безопасная работа, за которую никогда не должны
            браться дилетанты.
          </motion.p>

          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.img} src={tsvetMet} alt="Girl"/>
        </div>
      </AboutUsSection>
    </>

  )
}

export default AboutTextContent
