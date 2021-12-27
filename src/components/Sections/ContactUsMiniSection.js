import React from 'react'
import styles from '../../styles/sections/ContactUsMiniSection.module.sass'
import ButtonContactUs from "../Buttons/ButtonContactUs";

function ContactUsMiniSection() {
  return (
    <section className={styles.section}>
      {/*<div className={styles.wrapper}>*/}
        <div className="container">
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Узнайте стоимость вашего металла за <span>3 минуты !</span></h2>
            <form className={styles.form}>
              <input className={styles.input} placeholder={'+7(___)-___-__-__'} type="phone"/>
              <input className={styles.input} placeholder={'Ваше имя'} type="text"/>
              <ButtonContactUs />
            </form>
            <p className={styles.text}>Оставляя заявку Вы соглашайтесь с условиями на обработку песональных данных.</p>
          </div>
        </div>
      {/*</div>*/}
    </section>
  )
}

export default ContactUsMiniSection
