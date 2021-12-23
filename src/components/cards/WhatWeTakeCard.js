import React from 'react'
import styles from '../../styles/cards/WhatWeTakeCard.module.sass'
import CheckIcon from "../icons/CheckIcon";

function WhatWeTakeCard({ title, img, items, children }) {

  return (
    <div
      style={{ backgroundImage: `url(${img})` }} className={styles.card}>
      <div className={styles.overlay}>
        <h3 className={styles.title}>{ title }</h3>
        <ul className={styles.list}>
          {/*{ children }*/}
          { items.map((i, index) => <li key={index}><div> <CheckIcon /> </div> { i }</li>) }
        </ul>
      </div>
    </div>
  )
}



export default WhatWeTakeCard
