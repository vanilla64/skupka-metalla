import React from 'react'
import styles from "../../styles/ButtonContactUs.module.sass"

function ButtonContactUs({values}) {
  //const {name,phone} = values && values;
  return (
    <button type="submit" className={styles.button}>
      <div />
      <span>Узнать цену</span>
    </button>
  );
}

export default ButtonContactUs
