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
        priceRozn={150} priseOpt={170} />

      <TableRow
        img={aluET}
        title={'Алюминий 1-1 (пищевой)'}
        priceRozn={130} priseOpt={160} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Алюминий АД-31 (Профиль) чистый'}
        priceRozn={120} priseOpt={150} />

      <TableRow
        img={aluET}
        title={'Алюминий АД-31 (Профиль) грязный'}
        priceRozn={90} priseOpt={110} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Опалубка (засор по факту)'}
        priceRozn={90} priseOpt={100} />

      <TableRow
        img={aluET}
        title={'Диски'}
        priceRozn={110} priseOpt={130} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Алюминиевая банка'}
        priceRozn={50} priseOpt={60} />

      <TableRow
        img={aluET}
        title={'Алюминий (разносортный)'}
        priceRozn={85} priseOpt={95} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Алюминий моторка'}
        priceRozn={85} priseOpt={95} />

      <TableRow
        img={aluET}
        title={'Алюминий офсет'}
        priceRozn={85} priseOpt={95} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Алюминий радиаторы'}
        priceRozn={45} priseOpt={60} />

      <TableRow
        img={aluET}
        title={'Алюминиевая стружка (засор от 5%)'}
        priceRozn={70} priseOpt={80} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Электродвигатель (корпус алюминий)'}
        priceRozn={45} priseOpt={45} />

      <TableRow
        img={aluET}
        title={'Электродвигатель (корпус чугун)'}
        priceRozn={40} priseOpt={40} />
    </>
  )
}

export default AluminumTable
