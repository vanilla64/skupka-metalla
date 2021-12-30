import React from 'react'
import aluET from "../../images/metals/alu-et.jpg"
import TableRow from "../../TableRow"

function BatteryTable() {
  return (
    <>
      <TableRow
        bgGrey
        img={aluET}
        title={'Аккумуляторы (гель, полипропилен)'}
        priceRozn={68} priseOpt={70} />

      <TableRow
        img={aluET}
        title={'Аккумуляторы (эбонит)'}
        priceRozn={55} priseOpt={60} />
    </>
  )
}

export default BatteryTable
