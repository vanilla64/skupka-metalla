import React from 'react'
import styles from '../styles/Logos.module.sass'

function Logos({ children }) {
  return (
    <ul className={styles.list}>
      { children }
    </ul>
  )
}

export default Logos
