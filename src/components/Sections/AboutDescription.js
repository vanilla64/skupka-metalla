import React from 'react'
import styles from '../../styles/sections/AboutDescription.module.sass'

function AboutDescription({ img, text, reverse }) {
  const classes = {
    wrapper: reverse
      ? `${styles.wrapper} ${styles.wrapper_reverse}`
      : styles.wrapper
  }

  return (
    <section>
      <div className="container">
        <div className={classes.wrapper}>
          <p className={styles.text}>{ text }</p>
          <img src={img} alt="Description" />
        </div>
      </div>
    </section>
  )
}

export default AboutDescription
