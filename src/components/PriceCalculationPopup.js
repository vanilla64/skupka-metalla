import React, { useContext, useState } from 'react'
import styles from '../styles/PriceCalculationPopup.module.sass'
import AppContext from "../contexts/AppContext"
import {send} from "@emailjs/browser";

function PriceCalculationPopup() {
  const { isCalculationPopupOpen, calculatedData, setIsCalculationPopupOpen, setIsToastOpen } = useContext(AppContext)

  const [values, setValues] = useState({
    name: '',
    phone: '',
  })

  const classes = {
    section: isCalculationPopupOpen
      ? `${styles.section} ${styles.section_active}`
      : styles.section
  }

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
        setIsCalculationPopupOpen(false)

        setTimeout(() => {
          setIsToastOpen(false)
        }, 1500)

      }, function(error) {
        console.log('FAILED...', error)
      })
  }

  const onOverlayClick = () => setIsCalculationPopupOpen(false)

  return (
    <section className={classes.section}>
      <div onClick={onOverlayClick} className={styles.overlay}/>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Приблизительная стоимость составляет { calculatedData } р.</h3>
        <p className={styles.text}>Для более точной информации нужно больше информации</p>
        <p className={styles.text}>Оставьте заявку и мы вам перезвоним</p>

        <form onSubmit={onSubmit} className={styles.form}>
          <input onChange={onChange} value={values.name} type="text" name="name" placeholder={'Имя'}/>
          <input onChange={onChange} value={values.phone} type="phone" name="phone" placeholder={'+7 (___)-__-__'}/>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  )
}

export default PriceCalculationPopup
