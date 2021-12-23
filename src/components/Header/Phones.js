import React from 'react'
import styles from '../../styles/Phones.module.sass'
import { CONTACTS } from "../../constants/contacts"

function Phones() {
  const { MOB, CITY } = CONTACTS.PHONES

  return (
    <div className={styles.phones}>
      <p className={styles.text}>{ MOB }</p>
      <p className={styles.text}>{ CITY }</p>
    </div>
  )
}

export default Phones
