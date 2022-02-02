import React from 'react'
import styles from '../../styles/HeaderNavigation.module.sass'
import {NavLink} from "react-router-dom"
import { ROUTES } from "../../constants/ROUTES"

function HeaderNavigation() {
  const { ABOUT, SERVICES, DISMANTLING, PRICE, REVIEWS, VACANCY,CONTACTS } = ROUTES

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink className={styles.navLink} to={ABOUT}>О компании</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.navLink} to={SERVICES}>Услуги</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.navLink} to={DISMANTLING}>Демонтаж</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.navLink} to={PRICE}>Прайс-лист</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.navLink} to={REVIEWS}>Отзывы</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.navLink} to={VACANCY}>Вакансии</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.navLink} to={CONTACTS}>Контакты</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNavigation

