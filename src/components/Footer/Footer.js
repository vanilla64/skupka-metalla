import React from 'react'
import styles from '../../styles/Footer.module.sass'
import Logo from "../Logo"
import {NavLink} from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Информация</h3>
            <nav>
              <ul className={styles.list}>
                <li>
                  <NavLink className={styles.navLink} to={'/'}>О компании</NavLink>
                </li>
                <li>
                  <NavLink className={styles.navLink} to={'/'}>Услуги</NavLink>
                </li>
                <li>
                  <NavLink className={styles.navLink} to={'/'}>Прайс-лист</NavLink>
                </li>
                <li>
                  <NavLink className={styles.navLink} to={'/'}>Отзывы</NavLink>
                </li>
                <li>
                  <NavLink className={styles.navLink} to={'/'}>Контакты</NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>с 09:00 до 21:00 без выходных</h3>
            <ul className={styles.list}>
              <li>
                <a className={styles.columnLink} href="tel:+78005505383">+7 (800) 550-53-83</a>
              </li>
              <li>
                <a className={styles.columnLink} href="tel:+79917777895">+7 (991) 777-78-95</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyright}>Copyright © 2021 Все права защищены.</p>
          <a href={'/'} className={styles.policy}>Политика конфиденциальности</a>
        </div>

        <div className={styles.roboweb}>
          <p>
            Разработка и продвижение <a href="https://roboweb.team/" rel="noreferrer" target="_blank">roboweb.team</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
