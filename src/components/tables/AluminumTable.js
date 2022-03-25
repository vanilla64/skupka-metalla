import React from 'react'
import aluET from "../../images/metals/alu-et.jpg"
import TableRow from "../../TableRow"

function AluminumTable() {
  return (
    <>
      <TableRow
        bgGrey
        img={aluET}
        title={'Алюминий 1-1 (электротехнический)'}
        priceRozn={190} priseOpt={200} />

      <TableRow
        img={aluET}
        title={'Алюминий 1-1 (пищевой)'}
        priceRozn={180} priseOpt={190} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Алюминий АД-31 (Профиль) чистый'}
        priceRozn={170} priseOpt={180} />

      <TableRow
        img={aluET}
        title={'Алюминий АД-31 (Профиль) грязный'}
        priceRozn={150} priseOpt={150} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Опалубка (засор по факту)'}
        priceRozn={150} priseOpt={150} />

      <TableRow
        img={aluET}
        title={'Диски'}
        priceRozn={140} priseOpt={150} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Алюминиевая банка'}
        priceRozn={70} priseOpt={90} />

      <TableRow
        img={aluET}
        title={'Алюминий (разносортный)'}
        priceRozn={110} priseOpt={120} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Алюминий моторка'}
        priceRozn={110} priseOpt={120} />

      <TableRow
        img={aluET}
        title={'Алюминий офсет'}
        requestPrice
        priceRozn={85} priseOpt={95} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Алюминий радиаторы'}
        priceRozn={60} priseOpt={90} />

      <TableRow
        img={aluET}
        title={'Алюминиевая стружка (засор от 5%)'}
        requestPrice
        priceRozn={70} priseOpt={80} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Электродвигатель (корпус алюминий)'}
        requestPrice
        priceRozn={45} priseOpt={45} />

      <TableRow
        img={aluET}
        title={'Электродвигатель (корпус чугун)'}
        requestPrice
        priceRozn={40} priseOpt={40} />
    </>
  )
}

export default AluminumTable
