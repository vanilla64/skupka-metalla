import React, {useContext} from 'react'
import styles from '../styles/Toast.module.sass'
import AppContext from "../contexts/AppContext"

function Toast() {
  const { isToastOpen } = useContext(AppContext)

  const classes = {
    toast: isToastOpen
      ? `${styles.toast} ${styles.toast_active}`
      : styles.toast
  }

  return (
    <div className={classes.toast}>
      <h3 className={styles.title}>Заявка отправлена!</h3>
    </div>
  )
}

export default Toast
