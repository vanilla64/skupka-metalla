import React from 'react'
import styles from "../styles/sections/PriceBlackMetalSection.module.sass"

function TableMetal({ children }) {
  return (
    <table className={styles.table}>
      <thead>
      <tr>
        <th></th>
        <th>Вид металла</th>
        <th>Цена</th>
      </tr>
      </thead>

      <tbody>
      { children }
      </tbody>
    </table>
  )
}

export default TableMetal
