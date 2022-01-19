import React from 'react'
import styles from '../../styles/sections/AboutUsSection.module.sass'

function AboutUsSection({ children }) {
  return (
    <section className={styles.section}>
      <div className="container">
        { children }
      </div>
    </section>
  )
}

export default AboutUsSection
