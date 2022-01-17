import React, { useState, useContext } from 'react'
import styles from '../../styles/sections/ContactUsMiniSection.module.sass'
import ButtonContactUs from "../Buttons/ButtonContactUs"
import { send } from "@emailjs/browser"
import AppContext from "../../contexts/AppContext"

function ContactUsMiniSection() {
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
      {/*<div className={styles.wrapper}>*/}
        <div className="container">
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Узнайте стоимость вашего металла за <span>3 минуты !</span></h2>
            <form onSubmit={onSubmit} className={styles.form}>
              <input onChange={onChange} value={values.phone} className={styles.input} placeholder={'+7(___)-___-__-__'} type="phone" name="phone"/>
              <input onChange={onChange} value={values.name} className={styles.input} placeholder={'Ваше имя'} type="text" name="name"/>
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
