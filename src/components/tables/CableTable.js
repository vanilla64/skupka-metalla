import React from 'react'
import aluET from "../../images/metals/alu-et.jpg"
import TableRow from "../../TableRow"

function CableTable() {
  return (
    <>
      <TableRow
        bgGrey
        img={aluET}
        title={'Цены по запросу'}
        priceRozn={''} priseOpt={''} />
    </>
  )
}

export default CableTable
