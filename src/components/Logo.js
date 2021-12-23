import React from 'react'
import logo from '../images/logo-black.svg'
import styles from '../styles/Logo.module.sass'

function Logo() {
  return (
    <img className={styles.logo} src={logo} alt="Logo"/>
  )
}

export default Logo
