import React from 'react'
import styles from '../../styles/sections/PriceBlackMetalSection.module.sass'
import SectionTitle from "./SectionTitle"
import TableRow from "../../TableRow"

import aluET from '../../images/metals/alu-et.jpg'

function PriceBlackMetalSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle title={'Цены на черный металлолом'} />

        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Вид металла</th>
              <th>Цена</th>
            </tr>
          </thead>

          <tbody>
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
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PriceBlackMetalSection
