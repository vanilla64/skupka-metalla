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
      <div onClick={onCloseClick} className={styles.closeLine} />

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
            <th>Чёрный металл</th>
            <th> <ArrowUpIcon /> 25 000р/тонна</th>
          </tr>

          <tr>
            <th>Медь а1-1 (блеск)</th>
            <th> <ArrowUpIcon /> 660 руб/кг</th>
          </tr>

          <tr>
            <th>Алюминий 1-1 (пищевой)</th>
            <th> <ArrowDownIcon /> 130 руб/кг</th>
          </tr>

          <tr>
            <th>Медь (шина)</th>
            <th> <ArrowUpIcon /> 650 руб/кг</th>
          </tr>

          <tr>
            <th>Нержавеющая сталь 6%</th>
            <th> <ArrowDownIcon /> 50 руб/кг</th>
          </tr>

          <tr>
            <th>Латунь</th>
            <th> <ArrowDownIcon /> 340 руб/кг</th>
          </tr>

          <tr>
            <th>Бронза</th>
            <th> <ArrowDownIcon /> 360 руб/кг</th>
          </tr>

          <tr>
            <th>Свинец чистый</th>
            <th> <ArrowUpIcon /> 110 руб/кг</th>
          </tr>

          <tr>
            <th>Аккумуляторы</th>
            <th><ArrowUpIcon /> 68 руб/кг</th>
          </tr>

          <tr>
            <th>Лом автомобиля</th>
            <th> <ArrowUpIcon /> 24 000 руб/тонна</th>
          </tr>
        </tbody>

      </table>

      <button onClick={onPriceClick} className={styles.buttonPrice}>Прайс-лист</button>
    </div>
  )
}

export default FixPricePopup
