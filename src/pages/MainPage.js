import React from 'react'
import MainLayout from "../layouts/MainLayout"
import HomeSection from "../components/Sections/HomeSection"
import WhatWeDoSection from "../components/Sections/WhatWeDoSection"

function MainPage() {
  return (
    <MainLayout>
      <HomeSection />
      {/*<WhatWeDoSection />*/}
    </MainLayout>
  )
}

export default MainPage
