import React from 'react'
import styles from '../../styles/cards/ReviewCard.module.sass'
import StarIcon from "../icons/StarIcon"

function ReviewCard({ name, date, text }) {
  return (
    <li className={styles.card}>
      <h3 className={styles.title}>{ name }</h3>
      <p className={styles.date}>{ date }</p>
      <p className={styles.text}>{ text }</p>
      <div className={styles.rating}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </li>
  )
}

export default ReviewCard
