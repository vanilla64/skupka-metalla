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
        priceRozn={70} priseOpt={75} />

      <TableRow
        img={aluET}
        title={'Аккумуляторы (эбонит)'}
        priceRozn={60} priseOpt={65} />
    </>
  )
}

export default BatteryTable
