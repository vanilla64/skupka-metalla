import React from 'react'
import TableRow from "../../TableRow"
import aluET from "../../images/metals/alu-et.jpg"

function BlackMetalTable() {
  return (
    <>
      <TableRow
        bgGrey
        img={aluET}
        title={'Чёрный металл'}
        priceRozn={23} priseOpt={24} />

      <TableRow
        img={aluET}
        title={'Чугун'}
        priceRozn={23} priseOpt={24} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Лом автомобиля'}
        priceRozn={22} priseOpt={22} weight={' тонна'} />
    </>
  )
}

export default BlackMetalTable
