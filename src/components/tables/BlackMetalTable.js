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
        priceRozn={25} priseOpt={25} />

      <TableRow
        img={aluET}
        title={'Чугун'}
        priceRozn={25} priseOpt={25} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Лом автомобиля'}
        priceRozn={24} priseOpt={24} weight={' руб/тонна'} />
    </>
  )
}

export default BlackMetalTable
