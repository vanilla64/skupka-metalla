import React from 'react'
import aluET from "../../images/metals/alu-et.jpg"
import TableRow from "../../TableRow"

function PlumbumTable() {
  return (
    <>
      <TableRow
        bgGrey
        img={aluET}
        title={'Свинец (оболочка кабеля) чистый'}
        priceRozn={110} priseOpt={120} />

      <TableRow
        img={aluET}
        title={'Свинец (переплав) грязный'}
        priceRozn={100} priseOpt={110} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Свинец (грузики)'}
        priceRozn={50} priseOpt={60} />

      <TableRow
        img={aluET}
        title={'Цинк (карбюраторный, решётки)'}
        priceRozn={50} priseOpt={80} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Цинк (карбюратор в сборе)'}
        priceRozn={50} priseOpt={80} />
    </>
  )
}

export default PlumbumTable
