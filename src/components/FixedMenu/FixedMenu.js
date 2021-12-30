import React, { useContext } from 'react'
import styles from '../../styles/FixedMenu.module.sass'
import logo from '../../images/logo-circle.png'
import WhatsappIcon from "../icons/WhatsappIcon"
import GeoIcon from "../icons/GeoIcon"
import TelephoneIcon from "../icons/TelephoneIcon"
import EnvelopeIcon from "../icons/EnvelopeIcon"
import AppContext from "../../contexts/AppContext"

function FixedMenu() {
  const { setIsMobileMenuOpen } = useContext(AppContext)

  const onMenuClick = () => setIsMobileMenuOpen(prev => !prev)

  return (
    <section className={styles.fixedMenu}>
      <a
        className={styles.link}
        href="https://api.whatsapp.com/send?phone=+79917777895&text=Здравствуйте! Пишу вам с сайта skupka-metalloloma.com"
        target="_blank"
        rel="noreferrer">
        <WhatsappIcon />
      </a>

      <a
        style={{ margin: '0 10px 0 0' }}
        className={styles.link}
        href="tel:+7 (800) 550-53-83"
        target="_blank"
        rel="noreferrer">
        <TelephoneIcon />
      </a>

      <img
        onClick={onMenuClick}
        className={styles.logo}
        src={logo}
        alt="Menu"/>

      <a
        style={{ margin: '0 0 0 10px' }}
        className={styles.link}
        href="mailto:standart-lom@inbox.ru"
        target="_blank"
        rel="noreferrer">
        <EnvelopeIcon />
      </a>

      <a
        className={styles.link}
        href="https://tinyurl.com/w9dhw6y"
        target="_blank"
        rel="noreferrer">
        <GeoIcon />
      </a>
    </section>
  )
}

export default FixedMenu
