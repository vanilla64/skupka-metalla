import React, { useState, useContext } from 'react'
import styles from '../../styles/sections/ContactUsSection.module.sass'
import ButtonContactUs from "../Buttons/ButtonContactUs"
import BestOfferList from "../BestOfferList"
import { send } from "@emailjs/browser"
import AppContext from "../../contexts/AppContext"

function ContactUsSection() {
  const { setIsToastOpen } = useContext(AppContext)
  const [values, setValues] = useState({
    name: '',
    phone: '',
  })

  const onChange = evt => {
    const { name, value } = evt.target
    setValues(prev => { return { ...prev, [name]: value } })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    send(
      'service_h9d8ifl',
      'template_s4hqftf',
      values,
      'user_B0RmS66rgUajGJ6kANxU7'
    )
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text)

        setValues({
          name: '',
          phone: '',
        })

        setIsToastOpen(true)

        setTimeout(() => {
          setIsToastOpen(false)
        }, 1500)

      }, function(error) {
        console.log('FAILED...', error)
      })
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.formContainer}>
            <h3 className={styles.title}>Узнайте стоимость Вашего Металла за 3 минуты</h3>
            <form onSubmit={onSubmit} className={styles.form}>
              <input
                value={values.name}
                onChange={onChange}
                className={styles.input}
                type="text"
                name={'name'}
                placeholder={'Ваше имя'}
                required
              />
              <input
                value={values.phone}
                onChange={onChange}
                className={styles.input}
                type="phone"
                name={'phone'}
                placeholder={'+7 (___) - ___ - __ - __'}
                required
              />
              <ButtonContactUs />
            </form>

            <div className={styles.buttonChat}>
              <p className={styles.chatText}>Есть операторы онлайн</p>
              <div className={styles.circle} />
            </div>

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
