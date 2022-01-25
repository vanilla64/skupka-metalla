import React, { useState, useContext } from 'react'
import styles from '../styles/ContactUsPopupWithMessage.module.sass'
import CloseIcon from "./icons/CloseIcon"
import AppContext from "../contexts/AppContext"
// import { send } from "@emailjs/browser"

function ContactUsPopupWithMessage() {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const { isPopupWithMessage, setIsPopupWithMessage, setIsToastOpen } = useContext(AppContext)

  const classes = {
    section: isPopupWithMessage
      ? `${styles.section} ${styles.section_active}`
      : styles.section
  }

  const onChange = evt => {
    const { name, value } = evt.target
    setValues(prev => { return { ...prev, [name]: value } })
  }

  const onOverlayClick = () => setIsPopupWithMessage(false)

  const onSubmit = evt => {
    evt.preventDefault()

    console.log('DICK')
    // send(
    //   'service_h9d8ifl',
    //   'template_hxwx5yl',
    //   values,
    //   'user_B0RmS66rgUajGJ6kANxU7'
    // )
    //   .then(function(response) {
    //     console.log('SUCCESS!', response.status, response.text)
    //
    //     setValues({
    //       name: '',
    //       phone: '',
    //       message: '',
    //     })
    //
    //     setIsPopupWithMessage(false)
    //     setIsToastOpen(true)
    //
    //     setTimeout(() => {
    //       setIsToastOpen(false)
    //     }, 1500)
    //
    //   }, function(error) {
    //     console.log('FAILED...', error)
    //   })
  }

  return (
    <section className={classes.section}>
      <div onClick={onOverlayClick} className={styles.overlay} />

      <div className={styles.wrapper}>
        <div onClick={onOverlayClick} className={styles.closeBtn}>
          <CloseIcon />
        </div>

        <h3 className={styles.title}>
          Свяжитесь с нами
        </h3>

        <form onSubmit={onSubmit} className={styles.form}>
          <input
            onChange={onChange}
            name="name"
            value={values.name}
            type="text"
            placeholder={'Имя'}/>
          <input
            onChange={onChange}
            name="phone"
            value={values.phone}
            type="phone"
            placeholder={'+7 (___)-__-__'}/>
          <textarea
            onChange={onChange}
            name="message"
            value={values.message}
            type="text"
            placeholder={'Сообщение'}
          />
          <button>Оставить заявку</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUsPopupWithMessage
