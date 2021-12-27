import React from 'react'
import styles from '../../styles/sections/ContactUsSection.module.sass'
import ButtonContactUs from "../Buttons/ButtonContactUs"
import BestOfferList from "../BestOfferList"

function ContactUsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.formContainer}>
            <h3 className={styles.title}>Узнайте стоимость Вашего Металла за 3 минуты</h3>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                name={'name'}
                placeholder={'Ваше имя'}
                required
              />
              <input
                className={styles.input}
                type="phone"
                name={'phone'}
                placeholder={'+7 (___) - ___ - __ - __'}
                required
              />
              <ButtonContactUs />
            </form>
          </div>

          <div className={styles.bestOfferContainer}>
            <h3> Лучшие условия для сдачи лома !</h3>
            <BestOfferList />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
