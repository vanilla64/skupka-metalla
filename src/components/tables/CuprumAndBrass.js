import React from 'react'
import aluET from "../../images/metals/alu-et.jpg"
import TableRow from "../../TableRow"

function CuprumAndBrass() {
  return (
    <>
      <TableRow
        bgGrey
        img={aluET}
        title={'Медь а1-1 (блеск)'}
        priceRozn={700} priseOpt={710} />

      <TableRow
        img={aluET}
        title={'Медь (шина)'}
        priceRozn={690} priseOpt={700} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Медь а1-2 (кусок)'}
        priceRozn={690} priseOpt={700} />

      <TableRow
        img={aluET}
        title={'Медь (разносорт.)'}
        priceRozn={680} priseOpt={690} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Латунь'}
        priceRozn={370} priseOpt={380} />

      <TableRow
        img={aluET}
        title={'Латунная стружка'}
        priceRozn={300} priseOpt={310} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Радиаторы медь/латунь'}
        priceRozn={380} priseOpt={390} />

      <TableRow
        img={aluET}
        title={'Бронза'}
        priceRozn={400} priseOpt={410} />
    </>
  )
}

export default CuprumAndBrass
