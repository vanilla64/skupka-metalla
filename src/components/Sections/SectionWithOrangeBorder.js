import React from 'react'
import styles from "../../styles/sections/SectionWithOrangeBorder.module.sass"

function SectionWithOrangeBorder({ children }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>

          { children }

        </div>
      </div>
    </section>
  )
}

export default SectionWithOrangeBorder
