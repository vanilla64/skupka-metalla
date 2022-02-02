import React, {useContext} from 'react'
import { NavLink } from "react-router-dom"
import styles from '../styles/PopupMenu.module.sass'
import AppContext from "../contexts/AppContext"
import { ROUTES } from "../constants/ROUTES"
import { motion } from "framer-motion"
import { enableBodyScroll } from "body-scroll-lock"

function PopupMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen, setIsBurgerActive } = useContext(AppContext)

  const { MAIN, ABOUT, SERVICES, DISMANTLING, PRICE, REVIEWS, VACANCY,CONTACTS } = ROUTES

  const onLinkClick = () => {
    const menu = document.querySelector('#burgerMenu')

    setIsMobileMenuOpen(prev => !prev)
    setIsBurgerActive(prev => !prev)

    enableBodyScroll(menu)
  }

  const classes = {
    section: isMobileMenuOpen
      ? `${styles.section} ${styles.section_active}`
      : styles.section
  }

  const container = {
    hidden: {
      opacity: 0
    },

    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: {
      x: -50,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <section id={'burgerMenu'} className={classes.section}>
      <div className={styles.wrapper}>
        <nav>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
          >
            <motion.li className={styles.listItem} variants={item}>
              <NavLink onClick={onLinkClick} className={styles.navLink} to={MAIN}>Главная</NavLink>
            </motion.li>
            <motion.li className={styles.listItem} variants={item}>
              <NavLink onClick={onLinkClick} className={styles.navLink} to={ABOUT}>О компании</NavLink>
            </motion.li>
            <motion.li className={styles.listItem} variants={item}>
              <NavLink onClick={onLinkClick} className={styles.navLink} to={SERVICES}>Услуги</NavLink>
            </motion.li>
            <motion.li className={styles.listItem} variants={item}>
              <NavLink onClick={onLinkClick} className={styles.navLink} to={DISMANTLING}>Демонтаж</NavLink>
            </motion.li>
            <motion.li className={styles.listItem} variants={item}>
              <NavLink onClick={onLinkClick} className={styles.navLink} to={PRICE}>Прайс-лист</NavLink>
            </motion.li>
            <motion.li className={styles.listItem} variants={item}>
              <NavLink onClick={onLinkClick} className={styles.navLink} to={REVIEWS}>Отзывы</NavLink>
            </motion.li>
            <motion.li className={styles.listItem} variants={item}>
              <NavLink onClick={onLinkClick} className={styles.navLink} to={VACANCY}>Вакансии</NavLink>
            </motion.li>
            <motion.li className={styles.listItem} variants={item}>
              <NavLink onClick={onLinkClick} className={styles.navLink} to={CONTACTS}>Контакты</NavLink>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </section>
  )
}

export default PopupMenu
