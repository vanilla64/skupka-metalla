import React, { useContext } from 'react'
import styles from '../styles/MetalGroups.module.sass'
import AppContext from "../contexts/AppContext"

function MetalGroups() {
  const { setMetalGroup } = useContext(AppContext)

  const onLinkClick = evt => setMetalGroup(evt.target.textContent)

  return (
    <div>
      <div className="container">
        <ul className={styles.list}>
          <li onClick={onLinkClick} className={styles.listItem}>чёрный металл</li>
          <li onClick={onLinkClick} className={styles.listItem}>медно-латунная группа</li>
          <li onClick={onLinkClick} className={styles.listItem}>алюминиевая группа</li>
          <li onClick={onLinkClick} className={styles.listItem}>нержавеющая сталь</li>
          <li onClick={onLinkClick} className={styles.listItem}>свинцово-оловянная группа</li>
          <li onClick={onLinkClick} className={styles.listItem}>лом кабеля</li>
          <li onClick={onLinkClick} className={styles.listItem}>аккумуляторы</li>
          <li onClick={onLinkClick} className={styles.listItem}>прочее</li>
        </ul>
      </div>
    </div>
  )
}

export default MetalGroups
