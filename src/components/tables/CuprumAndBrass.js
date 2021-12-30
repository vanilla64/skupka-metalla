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
        priceRozn={630} priseOpt={640} />

      <TableRow
        img={aluET}
        title={'Медь (шина)'}
        priceRozn={620} priseOpt={630} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Медь а1-2 (кусок)'}
        priceRozn={620} priseOpt={630} />

      <TableRow
        img={aluET}
        title={'Медь (разносорт.)'}
        priceRozn={610} priseOpt={620} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Латунь'}
        priceRozn={300} priseOpt={320} />

      <TableRow
        img={aluET}
        title={'Латунная стружка'}
        priceRozn={200} priseOpt={210} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Радиаторы медь/латунь'}
        priceRozn={300} priseOpt={310} />

      <TableRow
        img={aluET}
        title={'Бронза'}
        priceRozn={300} priseOpt={330} />
    </>
  )
}

export default CuprumAndBrass
