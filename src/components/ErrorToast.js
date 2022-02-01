import React from 'react'
import styles from '../styles/Toast.module.sass'

function ErrorToast({msg,isErrorToastOpen}) { 

  const classes = {
    toast: isErrorToastOpen
      ? `${styles.toast} ${styles.toast_active}`
      : styles.toast
  }

  return (
    <div className={classes.toast}>
      <h3 className={styles.title}>{msg}</h3>
    </div>
  )
}

export default ErrorToast
