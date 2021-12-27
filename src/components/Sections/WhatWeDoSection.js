import React from 'react'
import styles from '../../styles/sections/WhatWeDoSection.module.sass'
import SectionTitle from "./SectionTitle"
import WhatWeTakeList from "../WhatWeTakeList"

function WhatWeDoSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle title={'Мы принимаем любой металлолом'} />
        <WhatWeTakeList />
      </div>
    </section>
  )
}

export default WhatWeDoSection
