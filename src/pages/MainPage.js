import React from 'react'
import MainLayout from "../layouts/MainLayout"
import HomeSection from "../components/Sections/HomeSection"
import WhatWeDoSection from "../components/Sections/WhatWeDoSection"
import ContactUsSection from "../components/Sections/ContactUsSection";

function MainPage() {
  return (
    <MainLayout>
      <HomeSection />
      <WhatWeDoSection />
      <ContactUsSection />
    </MainLayout>
  )
}

export default MainPage
