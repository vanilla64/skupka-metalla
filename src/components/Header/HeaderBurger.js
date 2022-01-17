import React, { useContext } from 'react'
import AppContext from "../../contexts/AppContext"
import styles from '../../styles/HeaderBurger.module.sass'

function HeaderBurger() {
  const { isBurgerActive, setIsBurgerActive, setIsMobileMenuOpen } = useContext(AppContext)
  const handleClick = () => {
    setIsBurgerActive(prev => !prev)
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <div
      onClick={handleClick}
      className={
        isBurgerActive
          ? `${styles.burger} ${styles.burger_active}`
          : `${styles.burger}`}
    >
      <div></div>
    </div>
  )
}

export default HeaderBurger
