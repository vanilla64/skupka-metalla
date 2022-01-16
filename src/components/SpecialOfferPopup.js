import React, {useContext} from 'react'
import styles from '../styles/SpecialOfferPopup.module.sass'
import AppContext from "../contexts/AppContext"

function SpecialOfferPopup() {
  const { isSpecialOfferPopup, setIsSpecialOfferPopup } = useContext(AppContext)

  const classes = {
    section: isSpecialOfferPopup
      ? `${styles.section} ${styles.section_active}`
      : styles.section
  }

  const onOverlayClick = () => setIsSpecialOfferPopup(false)

  return (
    <section className={classes.section}>
      <div onClick={onOverlayClick} className={styles.overlay}/>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          Акция <span>+1000₽</span> за тонну при оформлении заявки (осталось 2 места)
        </h3>

        <form className={styles.form}>
          <input type="text" placeholder={'Имя'}/>
          <input type="phone" placeholder={'+7 (___)-__-__'}/>
          <button>Оставить заявку</button>
        </form>
      </div>
    </section>
  )
}

export default SpecialOfferPopup
