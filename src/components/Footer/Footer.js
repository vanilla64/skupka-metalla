import React from 'react'
import styles from '../../styles/Footer.module.sass'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <p className={styles.copyright}>Copyright © 2021 Все права защищены.</p>
          <a href={'/'} className={styles.policy}>Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
