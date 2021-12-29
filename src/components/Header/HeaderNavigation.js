import React from 'react'
import styles from '../../styles/HeaderNavigation.module.sass'
import {NavLink} from "react-router-dom"
import { ROUTES } from "../../constants/ROUTES"

function HeaderNavigation() {
  const { ABOUT, SERVICES } = ROUTES

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
          <NavLink className={styles.navLink} to={ABOUT}>О компании</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNavigation

