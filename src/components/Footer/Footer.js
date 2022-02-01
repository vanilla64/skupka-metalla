import React from 'react'
import styles from '../../styles/Footer.module.sass'
import Logo from "../Logo"
import { NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/ROUTES"

function Footer() {
  const { ABOUT, SERVICES, REVIEWS, PRICE, CONTACTS } = ROUTES

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
                  <NavLink className={styles.navLink} to={ABOUT}>О компании</NavLink>
                </li>
                <li>
                  <NavLink className={styles.navLink} to={SERVICES}>Услуги</NavLink>
                </li>
                <li>
                  <NavLink className={styles.navLink} to={PRICE}>Прайс-лист</NavLink>
                </li>
                <li>
                  <NavLink className={styles.navLink} to={REVIEWS}>Отзывы</NavLink>
                </li>
                <li>
                  <NavLink className={styles.navLink} to={CONTACTS}>Контакты</NavLink>
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
          {/*<a href={'/'} className={styles.policy}>Политика конфиденциальности</a>*/}

          <a href="https://webmaster.yandex.ru/siteinfo/?site=https://skupkametala.ru">
            <img
              width="88"
              height="31" alt=""
              border="0"
              src="https://yandex.ru/cycounter?https://skupkametala.ru&theme=light&lang=ru"/>
          </a>

          <div className={styles.roboweb}>
            <p>
              Разработка и продвижение <a href="https://roboweb.team/" rel="noreferrer" target="_blank">roboweb.team</a>
            </p>
          </div>
        </div>

        {/*<div className={styles.roboweb}>*/}
        {/*  <p>*/}
        {/*    Разработка и продвижение <a href="https://roboweb.team/" rel="noreferrer" target="_blank">roboweb.team</a>*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    </footer>
  )
}

export default Footer
