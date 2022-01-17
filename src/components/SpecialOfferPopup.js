import React, { useState, useContext } from 'react'
import styles from '../styles/SpecialOfferPopup.module.sass'
import AppContext from "../contexts/AppContext"
import {send} from "@emailjs/browser";

function SpecialOfferPopup() {
  const { isSpecialOfferPopup, setIsSpecialOfferPopup, setIsToastOpen } = useContext(AppContext)
  const [values, setValues] = useState({
    name: '',
    phone: '',
  })

  const classes = {
    section: isSpecialOfferPopup
      ? `${styles.section} ${styles.section_active}`
      : styles.section
  }

  const onOverlayClick = () => setIsSpecialOfferPopup(false)

  const onChange = evt => {
    const { name, value } = evt.target
    setValues(prev => { return { ...prev, [name]: value } })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    send(
      'service_h9d8ifl',
      'template_hxwx5yl',
      values,
      'user_B0RmS66rgUajGJ6kANxU7'
    )
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text)

        setValues({
          name: '',
          phone: '',
        })

        setIsSpecialOfferPopup(false)
        setIsToastOpen(true)

        setTimeout(() => {
          setIsToastOpen(false)
        }, 1500)

      }, function(error) {
        console.log('FAILED...', error)
      })
  }

  return (
    <section className={classes.section}>
      <div onClick={onOverlayClick} className={styles.overlay}/>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          Акция <span>+1000₽</span> за тонну при оформлении заявки (осталось 2 места)
        </h3>

        <form onSubmit={onSubmit} className={styles.form}>
          <input onChange={onChange} name="name" value={values.name} type="text" placeholder={'Имя'}/>
          <input onChange={onChange} name="phone" value={values.phone} type="phone" placeholder={'+7 (___)-__-__'}/>
          <button>Оставить заявку</button>
        </form>
      </div>
    </section>
  )
}

export default SpecialOfferPopup
