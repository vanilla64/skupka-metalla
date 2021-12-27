import React from 'react'
import styles from '../styles/BestOfferListItem.module.sass'

function BestOfferListItem({ title, img, text, price }) {
  return (
    <li className={styles.listItem}>
      { img }
      <div className={styles.textContainer}>
        <p className={styles.priceTitle}>{ title }</p>
        <p className={styles.text}>{ text } {price && <span className={styles.price}>{price}</span>}</p>
      </div>
    </li>
  )
}

export default BestOfferListItem
