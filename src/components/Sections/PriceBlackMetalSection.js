import React from 'react'
import styles from '../../styles/sections/PriceBlackMetalSection.module.sass'
import SectionTitle from "./SectionTitle"
import TableRow from "../../TableRow"

import aluET from '../../images/metals/alu-et.jpg'
import TableMetal from "../TableMetal";

function PriceBlackMetalSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle title={'Цены на черный металлолом'} />

        <TableMetal>
          <TableRow
            bgGrey
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            bgGrey
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            bgGrey
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            bgGrey
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            bgGrey
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            bgGrey
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />

          <TableRow
            img={aluET}
            title={'Алюминий электротехнический'}
            priceRozn={120} priseOpt={125} />
        </TableMetal>
      </div>
    </section>
  )
}

export default PriceBlackMetalSection
