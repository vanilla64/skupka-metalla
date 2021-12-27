import React from 'react'
import styles from '../../styles/sections/Calculator.module.sass'
import SectionTitle from "./SectionTitle"

function Calculator() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <SectionTitle
            title={'Калькулятор для расчета стоимости металлолома'}
            divider />

          <form className={styles.form}>
            <div className={styles.stepOne}>
              <label htmlFor="typeOfMetal">

              </label>
              <h3 className={styles.labelTitle}><span>Шаг 1. </span>Укажите вид металла</h3>

              <div className={styles.inputsWrap}>
                <select defaultValue={"type"} className={styles.select} name="typeOfMetal" id="typeOfMetal">
                  <option disabled value="type">Вид металла</option>
                  <option value="black">Черный металл</option>
                  <option value="colored">Цветной металл</option>
                </select>

                <select defaultValue={"category"} className={styles.select} name="typeOfMetal" id="typeOfMetal">
                  <option disabled value="category">Выбрать категорию</option>
                  <option value="aluET">Алюминий электротехнический</option>
                  <option value="aluEat">Алюминий пищевой</option>
                  <option value="aluProfClean">Алюминиевый профиль (чистый)</option>
                  <option value="aluProfDirt">Алюминиевый профиль (грязный)</option>
                </select>
              </div>

            </div>

            <div className={styles.stepTwo}>
              <h3 className={styles.labelTitle}><span>Шаг 2. </span>Укажите расценки</h3>
              <select defaultValue={'Цена'} className={`${styles.select} ${styles.selectPrice}`}>
                <option disabled value="Цена">Цена</option>
                <option value="opt">Оптовая</option>
                <option value="rozn">Розничная</option>
              </select>

            </div>

            <div className={styles.stepThree}>
              <h3 className={styles.labelTitle}><span>Шаг 3. </span>Укажите вес __ кг</h3>
              <input type="range" min={0} max={100000} step={10} defaultValue={1000}/>
              <p className={styles.formText}>Указать вес (в килограммах)</p>
              <input className={styles.number} type="number" step={10} defaultValue={1000}/>
            </div>

            <div className={styles.stepFour}>
              <h3 className={styles.labelTitle}><span>Шаг 4. </span>Нужен вывоз?</h3>

              <select defaultValue={'export'} className={`${styles.select} ${styles.selectExport}`}>
                <option disabled value="export">Нужен вывоз?</option>
                <option value="yes">Да</option>
                <option value="no">Нет</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Calculator
