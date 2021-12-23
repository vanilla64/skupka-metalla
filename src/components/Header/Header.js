import React from 'react'
import styles from '../../styles/Header.module.sass'
import HeaderNavBar from "./HeaderNavBar"
// import HeaderSlider from "./HeaderSlider"

function Header() {
  return (
    <header className={styles.header}>
      <HeaderNavBar />
      {/*<HeaderSlider />*/}
    </header>
  )
}

export default Header
