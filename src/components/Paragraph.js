import React from 'react'
import styles from '../styles/Paragraph.module.sass'

function Paragraph({ text }) {
  return (
    <div className="container">
      <p className={styles.paragraph}>{ text }</p>
    </div>
  )
}

export default Paragraph
