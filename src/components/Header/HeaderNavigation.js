import React from 'react'
import styles from '../../styles/HeaderNavigation.module.sass'

function HeaderNavigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.listItem}>nav</li>
        <li className={styles.listItem}>nav</li>
        <li className={styles.listItem}>nav</li>
      </ul>
    </nav>
  )
}

export default HeaderNavigation

