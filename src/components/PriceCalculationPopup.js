import React, {useContext} from 'react'
import styles from '../styles/PriceCalculationPopup.module.sass'
import AppContext from "../contexts/AppContext"

function PriceCalculationPopup() {
  const { isCalculationPopupOpen, calculatedData, setIsCalculationPopupOpen } = useContext(AppContext)

  const classes = {
    section: isCalculationPopupOpen
      ? `${styles.section} ${styles.section_active}`
      : styles.section
  }

  const onOverlayClick = () => setIsCalculationPopupOpen(false)

  return (
    <section className={classes.section}>
      <div onClick={onOverlayClick} className={styles.overlay}/>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Приблизительная стоимость составляет { calculatedData } р.</h3>
        <p className={styles.text}>Для более точной информации нужно больше информации</p>
        <p className={styles.text}>Оставьте заявку и мы вам перезвоним</p>

        <form className={styles.form}>
          <input type="text" placeholder={'Имя'}/>
          <input type="phone" placeholder={'+7 (___)-__-__'}/>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  )
}

export default PriceCalculationPopup
