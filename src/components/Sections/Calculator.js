import React, { useState, useContext } from 'react'
import styles from '../../styles/sections/Calculator.module.sass'
import SectionTitle from "./SectionTitle"
import SectionWithOrangeBorder from "./SectionWithOrangeBorder"
import { priceList } from "../../constants/priceList"
import AppContext from "../../contexts/AppContext"

function Calculator() {
  const [typeOfMetal, setTypeOfMetal] = useState('default')
  const [category, setCategory] = useState('default')
  const [typeOfPrice, setTypeOfPrice] = useState('default')
  const [weight, setWeight] = useState(1000)
  const [needExport, setNeedExport] = useState('default')

  const { setIsCalculationPopupOpen, setCalculatedData } = useContext(AppContext)

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
    const notSubmit = typeOfMetal === 'default' || category === 'default' || typeOfPrice === 'default' || needExport === 'default'
    const exportPrice = 2000

    let totalPrice

    if (notSubmit) return console.log('NOT SUBMIT')


    console.log(notSubmit)

    console.log(category)
    console.log(typeof priceList[typeOfMetal][category][typeOfPrice])

    totalPrice = priceList[typeOfMetal][category][typeOfPrice] * weight
    console.log('Result is ' + totalPrice)

    setCalculatedData(totalPrice)
    setIsCalculationPopupOpen(true)

    if (needExport === 'yes') return setCalculatedData(totalPrice + exportPrice)
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
            <select onChange={onTypeOfMetalChange} value={typeOfMetal} className={styles.select} name="typeOfMetal" id="typeOfMetal">
              <option disabled value="default">Вид металла</option>
              <option value="black">Черный металл</option>
              <option value="cuprum">Медно-латунная группа</option>
              <option value="alum">Алюминиевая группа</option>
              <option value="stainless">Нержавеющая сталь</option>
              <option value="plumbum">Свинцово-оловянная группа</option>
              <option value="battery">Аккумуляторы</option>
            </select>

            <select onChange={onCategoryChange} value={category} className={styles.select} name="typeOfMetal" id="typeOfMetal">
              { typeOfMetal === 'default' && <option disabled value={category}>Выбрать категорию</option> }
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
                    <option value="electrical">Алюминий 1-1 (электротехнический)</option>
                    <option value="foodGrade">Алюминий 1-1 (пищевой)</option>
                    <option value="profileClean">Алюминий АД-31 (Профиль) чистый</option>
                    <option value="profileDirt">Алюминий АД-31 (Профиль) грязный</option>
                    <option value="garbage">Опалубка (засор по факту)</option>
                    <option value="disks">Диски</option>
                    <option value="AluminumCan">Алюминиевая банка</option>
                    <option value="random">Алюминий (разносортный)</option>
                    <option value="motor">Алюминий моторка</option>
                    <option value="offset">Алюминий офсет</option>
                    <option value="radiators">Алюминий радиаторы</option>
                    <option value="shavings">Алюминиевая стружка (засор от 5%)</option>
                    <option value="electricEngineAlu">Электродвигатель (корпус алюминий)</option>
                    <option value="electricEngineCastIron">Электродвигатель (корпус чугун)</option>
                  </>
              }

              {
                typeOfMetal === 'stainless' &&
                <>
                  <option value="default">Выбрать категорию</option>
                  <option value="dimensional">Нержавеющая сталь габаритом 0,5х0,5х1,5 м, 10%</option>
                  <option value="oversizeTenPercent">Нержавеющая сталь негабаритная 10%</option>
                  <option value="oversizeEightPercent">Нержавеющая сталь 8% (в т. ч. негабаритная)</option>
                  <option value="oversizeSixPercent">Нержавеющая сталь 6%</option>
                </>
              }

              {
                typeOfMetal === 'plumbum' &&
                  <>
                    <option value="default">Выбрать категорию</option>
                    <option value="cableSheath">Свинец (оболочка кабеля) чистый</option>
                    <option value="dirt">Свинец (переплав) грязный</option>
                    <option value="weights">Свинец (грузики)</option>
                    <option value="grids">Цинк (карбюраторный, решётки)</option>
                    <option value="carburetor">Цинк (карбюратор в сборе)</option>
                  </>
              }

              {
                typeOfMetal === 'battery' &&
                  <>
                    <option value="default">Выбрать категорию</option>
                    <option value="gel">Аккумуляторы (гель, полипропилен)</option>
                    <option value="ebonite">Аккумуляторы (эбонит)</option>
                  </>
              }
            </select>
          </div>

        </div>

        <div className={styles.stepTwo}>
          <h3 className={styles.labelTitle}><span>Шаг 2. </span>Укажите расценки</h3>
          <select onChange={onTypeOfPriceChange} value={typeOfPrice} className={`${styles.select} ${styles.selectPrice}`}>
            <option disabled value="default">Цена</option>
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
            <option disabled value="default">Нужен вывоз?</option>
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
