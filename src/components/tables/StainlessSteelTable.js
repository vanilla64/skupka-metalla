import React from 'react'
import aluET from "../../images/metals/alu-et.jpg"
import TableRow from "../../TableRow"

function StainlessSteelTable() {
  return (
    <>
      <TableRow
        bgGrey
        img={aluET}
        title={'Нержавеющая сталь габаритом 0,5х0,5х1,5 м, 10%'}
        priceRozn={80} priseOpt={100} />

      <TableRow
        img={aluET}
        title={'Нержавеющая сталь негабаритная 10%'}
        priceRozn={70} priseOpt={90} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Нержавеющая сталь 8% (в т. ч. негабаритная)'}
        priceRozn={55} priseOpt={70} />

      <TableRow
        img={aluET}
        title={'Нержавеющая сталь 6%'}
        priceRozn={50} priseOpt={60} />
    </>
  )
}

export default StainlessSteelTable
