import React, { useState } from 'react'
import styles from '../../styles/sections/Calculator.module.sass'
import SectionTitle from "./SectionTitle"
import SectionWithOrangeBorder from "./SectionWithOrangeBorder"
import { priceList } from "../../constants/priceList"

function Calculator() {
  const [typeOfMetal, setTypeOfMetal] = useState('defaultValue')
  const [category, setCategory] = useState('')
  const [typeOfPrice, setTypeOfPrice] = useState('Цена')
  const [weight, setWeight] = useState(1000)
  const [needExport, setNeedExport] = useState('export')

  const onTypeOfMetalChange = evt => setTypeOfMetal(evt.target.value)
  const onCategoryChange = evt => setCategory(evt.target.value)

  const onWeightChange = evt => {
    if (evt.target.value >= 100000) return setWeight(100000)
    setWeight(evt.target.value)
  }

  const onTypeOfPriceChange = evt => setTypeOfPrice(evt.target.value)
  const onExportChange = evt => setNeedExport(evt.target.value)

  const onSubmit = evt => {
    evt.preventDefault()

    console.log(category)
    console.log(priceList[typeOfMetal][category][typeOfPrice])

    console.log('Result is ' + priceList[typeOfMetal][category][typeOfPrice] * weight)
  }

  return (
    <SectionWithOrangeBorder>
      <SectionTitle
        title={'Калькулятор для расчета стоимости металлолома'}
        divider />

      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.stepOne}>
          <label htmlFor="typeOfMetal">

          </label>
          <h3 className={styles.labelTitle}><span>Шаг 1. </span>Укажите вид металла</h3>

          <div className={styles.inputsWrap}>
            <select onChange={onTypeOfMetalChange} defaultValue={"type"} className={styles.select} name="typeOfMetal" id="typeOfMetal">
              <option disabled value="type">Вид металла</option>
              <option value="black">Черный металл</option>
              <option value="cuprum">Медно-латунная группа</option>
              <option value="alum">Алюминиевая группа</option>
              <option value="stainless">Нержавеющая сталь</option>
              <option value="plumbum">Свинцово-оловянная группа</option>
              <option value="battery">Аккумуляторы</option>
            </select>

            <select onChange={onCategoryChange} value={category} className={styles.select} name="typeOfMetal" id="typeOfMetal">
              { typeOfMetal === 'defaultValue' && <option disabled value={category}>Выбрать категорию</option> }
              { typeOfMetal === 'black' &&
                <>
                  <option value="default">Выбрать категорию</option>
                  <option value="castIron">Чугун</option>
                  <option value="blackMetal">Чёрный металл</option>
                  <option value="autoMet">Лом автомобиля</option>
                </>
              }

              {
                typeOfMetal === 'cuprum' &&
                  <><option value="default">Выбрать категорию</option>
                    <option value="glitter">Медь а1-1 (блеск)</option>
                    <option value="cable">Медь (шина)</option>
                    <option value="piece">Медь а1-2 (кусок)</option>
                    <option value="random">Медь (разносорт.)</option>
                    <option value="brass">Латунь</option>
                    <option value="brasShavings">Латунная стружка</option>
                    <option value="radiators">Радиаторы медь/латунь</option>
                    <option value="bronze">Бронза</option>
                  </>
              }

              {
                typeOfMetal === 'alum' &&
                  <>
                    <option value="default">Выбрать категорию</option>
                    <option value="">Алюминий 1-1 (электротехнический)</option>
                    <option value="">Алюминий 1-1 (пищевой)</option>
                    <option value="">Алюминий АД-31 (Профиль) чистый</option>
                    <option value="">Алюминий АД-31 (Профиль) грязный</option>
                    <option value="">Опалубка (засор по факту)</option>
                    <option value="">Диски</option>
                    <option value="">Алюминиевая банка</option>
                    <option value="">Алюминий (разносортный)</option>
                    <option value="">Алюминий моторка</option>
                    <option value="">Алюминий офсет</option>
                    <option value="">Алюминий радиаторы</option>
                    <option value="">Алюминиевая стружка (засор от 5%)</option>
                    <option value="">Электродвигатель (корпус алюминий)</option>
                    <option value="">Электродвигатель (корпус чугун)</option>
                  </>
              }

              {
                typeOfMetal === 'stainless' &&
                <>
                  <option value="default">Выбрать категорию</option>
                  <option value="">Нержавеющая сталь габаритом 0,5х0,5х1,5 м, 10%</option>
                  <option value="">Нержавеющая сталь негабаритная 10%</option>
                  <option value="">Нержавеющая сталь 8% (в т. ч. негабаритная)</option>
                  <option value="">Нержавеющая сталь 6%</option>
                </>
              }

              {
                typeOfMetal === 'plumbum' &&
                  <>
                    <option value="default">Выбрать категорию</option>
                    <option value="">Свинец (оболочка кабеля) чистый</option>
                    <option value="">Свинец (переплав) грязный</option>
                    <option value="">Свинец (грузики)</option>
                    <option value="">Цинк (карбюраторный, решётки)</option>
                    <option value="">Цинк (карбюратор в сборе)</option>
                  </>
              }

              {
                typeOfMetal === 'battery' &&
                  <>
                    <option value="default">Выбрать категорию</option>
                    <option value="">Аккумуляторы (гель, полипропилен)</option>
                    <option value="">Аккумуляторы (эбонит)</option>
                  </>
              }
            </select>
          </div>

        </div>

        <div className={styles.stepTwo}>
          <h3 className={styles.labelTitle}><span>Шаг 2. </span>Укажите расценки</h3>
          <select onChange={onTypeOfPriceChange} value={typeOfPrice} className={`${styles.select} ${styles.selectPrice}`}>
            <option disabled value="Цена">Цена</option>
            <option value="opt">Оптовая</option>
            <option value="roz">Розничная</option>
          </select>

        </div>

        <div className={styles.stepThree}>
          <h3 className={styles.labelTitle}><span>Шаг 3. </span>Укажите вес {weight} кг</h3>
          <input onChange={onWeightChange} type="range" min={0} max={100000} step={10} value={weight}/>
          <p className={styles.formText}>Указать вес (в килограммах)</p>
          <input onChange={onWeightChange} className={styles.number} type="number" step={10} max="100000" value={weight}/>
        </div>

        <div className={styles.stepFour}>
          <h3 className={styles.labelTitle}><span>Шаг 4. </span>Нужен вывоз?</h3>

          <select onChange={onExportChange} value={needExport} className={`${styles.select} ${styles.selectExport}`}>
            <option disabled value="export">Нужен вывоз?</option>
            <option value="yes">Да</option>
            <option value="no">Нет</option>
          </select>
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.buttonSubmit}>Рассчитать</button>
        </div>

      </form>
    </SectionWithOrangeBorder>
  )
}

export default Calculator
