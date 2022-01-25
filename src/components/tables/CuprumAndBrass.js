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
        priceRozn={660} priseOpt={680} />

      <TableRow
        img={aluET}
        title={'Медь (шина)'}
        priceRozn={650} priseOpt={670} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Медь а1-2 (кусок)'}
        priceRozn={650} priseOpt={670} />

      <TableRow
        img={aluET}
        title={'Медь (разносорт.)'}
        priceRozn={640} priseOpt={660} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Латунь'}
        priceRozn={340} priseOpt={350} />

      <TableRow
        img={aluET}
        title={'Латунная стружка'}
        priceRozn={250} priseOpt={260} />

      <TableRow
        bgGrey
        img={aluET}
        title={'Радиаторы медь/латунь'}
        priceRozn={350} priseOpt={360} />

      <TableRow
        img={aluET}
        title={'Бронза'}
        priceRozn={360} priseOpt={370} />
    </>
  )
}

export default CuprumAndBrass
