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
        priceRozn={28} priseOpt={28} />

      <TableRow
        img={aluET}
        title={'Чугун'}
        priceRozn={28} priseOpt={28} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Лом автомобиля'}
        priceRozn={28000} priseOpt={28000} weight={' руб/тонна'} />
    </>
  )
}

export default BlackMetalTable
