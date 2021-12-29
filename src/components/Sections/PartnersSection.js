import React from 'react'
import styles from '../../styles/sections/PartnersSection.module.sass'
import Logos from "../Logos"
import LogoCard from "../cards/LogoCard"
import mServiceImg from '../../images/partners/mservice-logo.svg'
import norikelImg from '../../images/partners/nornickel-logo.svg'
import tsvetmetImg from '../../images/partners/tsvetmet-logo.svg'

function PartnersSection() {
  return (
    <section className={styles.section}>
      <div className={'container'}>
        <div className={styles.wrapper}>
          <Logos>
            <LogoCard img={mServiceImg} />
            <LogoCard img={norikelImg} />
            <LogoCard img={tsvetmetImg} />
          </Logos>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
