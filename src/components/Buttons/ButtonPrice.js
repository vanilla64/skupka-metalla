import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from "../../constants/ROUTES"
import styles from '../../styles/ButtonPrice.module.sass'

function ButtonPrice() {
  const navigate = useNavigate()
  const onButtonClick = () => navigate(ROUTES.PRICE)

  return (
    <button onClick={onButtonClick} className={styles.button}>Прайс-лист</button>
  )
}

export default ButtonPrice
