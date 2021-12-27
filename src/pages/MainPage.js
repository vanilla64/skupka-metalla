import React from 'react'
import MainLayout from "../layouts/MainLayout"
import HomeSection from "../components/Sections/HomeSection"
import WhatWeDoSection from "../components/Sections/WhatWeDoSection"
import ContactUsSection from "../components/Sections/ContactUsSection"
import PriceBlackMetalSection from "../components/Sections/PriceBlackMetalSection"
import Calculator from "../components/Sections/Calculator"
import RoadmapSection from "../components/Sections/RoadmapSection"
import ContactUsMiniSection from "../components/Sections/ContactUsMiniSection"
import SectionWithImage from "../components/Sections/SectionWithImage"
import ExportSection from "../components/Sections/ExportSection"
import WhyWeFirstSection from "../components/Sections/WhyWeFirstSection"

function MainPage() {
  return (
    <MainLayout>
      <HomeSection />
      <WhatWeDoSection />
      <ContactUsSection />
      <PriceBlackMetalSection />
      <Calculator />
      <RoadmapSection />
      <SectionWithImage />
      <ContactUsMiniSection />
      <ExportSection />
      <WhyWeFirstSection />
    </MainLayout>
  )
}

export default MainPage
