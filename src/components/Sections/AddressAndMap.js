import React from 'react'
import styles from '../../styles/sections/AddressAndMap.module.sass'

function AddressAndMap() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div>
          {/*icon*/}
          <h5 className={styles.title}>Расположение</h5>
          <p className={styles.text}>Московская обл., п. Новоивановское, Можайское шоссе, вл. 166</p>

          <h5 className={styles.title}>Телефоны</h5>
          <a href="tel:+7 (800) 550-53-83" className={styles.link}>+7 (800) 550-53-83</a>
          <br/>
          <a href="tel:+7 (991) 777-78-95" className={styles.link}>+7 (991) 777-78-95</a>

          <h5 className={styles.title}>E-mail</h5>
          <a className={styles.link} href="mailto:standart-lom@inbox.ru">standart-lom@inbox.ru</a>

          <h5 className={styles.title}>Ссылки для навигаторов</h5>
          <div>
            <a className={styles.mapLink} href="https://tinyurl.com/w9dhw6y" target="_blank" rel="noreferrer">Яндекс.Карты</a>
            <a className={styles.mapLink} href="https://tinyurl.com/ttzck6s" target="_blank" rel="noreferrer">Google Maps</a>
          </div>
        </div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab3cde61a32b3b52913f23d547f2cdbe40f019313d723d51c8811e5b2b7c04cfd&amp;amp;source=constructor"
            width="60%" height="400" frameBorder="0"></iframe>
      </div>
    </div>
  )
}

export default AddressAndMap
