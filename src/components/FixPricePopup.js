import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/FixPricePopup.module.sass'
import CloseIcon from "./icons/CloseIcon"
import AppContext from "../contexts/AppContext"
import ArrowUpIcon from "./icons/ArrowUpIcon"
import ArrowDownIcon from "./icons/ArrowDownIcon"
import { ROUTES } from "../constants/ROUTES"

function FixPricePopup() {
  const { isFixedPopupOpen, setIsFixedPopupOpen } = useContext(AppContext)
  const { PRICE } = ROUTES
  const navigate = useNavigate()

  const classes = {
    fixPricePopup: isFixedPopupOpen
      ? `${styles.fixPricePopup} ${styles.fixPricePopup_active}`
      : styles.fixPricePopup
  }

  const onCloseClick = () => {setIsFixedPopupOpen(false)}
  const onPriceClick = () => {
    navigate(PRICE)

    setTimeout(() => {
      setIsFixedPopupOpen(false)
    }, 300)
  }

  return (
    <div className={classes.fixPricePopup}>
      <div onClick={onCloseClick} className={styles.closeLine}>
      <CloseIcon />
      </div>
      <div onClick={onCloseClick} className={styles.closeIcon}>
        <CloseIcon />
      </div>

      <h3 className={styles.title}>Ищите актуальные цены на металлолом?</h3>
      <div className={styles.phones}>
        <a className={styles.phone} href="tel:+7 (991) 777-78-95">+7 (991) 777-78-95</a>
        <a className={styles.phone} href="tel:+7 (800) 550-53-83">+7 (800) 550-53-83</a>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Вид металла</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th>Алюминий (профиль чистый)</th>
            <th> <ArrowDownIcon /> 160 руб/кг</th>
          </tr>
          <tr>
            <th>алюминий (эл/тех)</th>
            <th> <ArrowDownIcon /> 180 руб/кг</th>
          </tr>
          <tr>
            <th>алюминий (диски)</th>
            <th> <ArrowDownIcon /> 140 руб/кг</th>
          </tr>
          <tr>
            <th>Медь (блеск)</th>
            <th> <ArrowUpIcon /> 670 руб/кг</th>
          </tr>
          <tr>
            <th>Медь (mix)</th>
            <th> <ArrowUpIcon /> 650 руб/кг</th>
          </tr>
          <tr>
            <th>Латунь</th>
            <th> <ArrowDownIcon /> 370 руб/кг</th>
          </tr>
          <tr>
            <th>Свинец чистый</th>
            <th> <ArrowUpIcon /> 110 руб/кг</th>
          </tr>

          <tr>
            <th>Аккумуляторы</th>
            <th><ArrowUpIcon /> 70 руб/кг</th>
          </tr>

          <tr>
            <th>Лом автомобиля</th>
            <th> <ArrowUpIcon /> 24 000 руб/тонна</th>
          </tr>
          <tr>
            <th>Чёрный металл</th>
            <th> <ArrowUpIcon /> 25 000р/тонна</th>
          </tr>
        </tbody>

      </table>

      <button onClick={onPriceClick} className={styles.buttonPrice}>Прайс-лист</button>
    </div>
  )
}

export default FixPricePopup
