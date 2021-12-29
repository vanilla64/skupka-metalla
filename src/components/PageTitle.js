import React from 'react'
import styles from '../styles/PageTitle.module.sass'

function PageTitle({ title }) {
  return (
    <div className={'container'}>
      <h1 className={styles.title}>{ title }</h1>
    </div>
  )
}

export default PageTitle
