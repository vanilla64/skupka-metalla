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
        priceRozn={21} priseOpt={21} />

      <TableRow
        img={aluET}
        title={'Чугун'}
        priceRozn={28} priseOpt={28} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Лом автомобиля'}
        priceRozn={21000} priseOpt={21000} weight={' руб/тонна'} />
    </>
  )
}

export default BlackMetalTable
