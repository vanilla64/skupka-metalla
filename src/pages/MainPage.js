import React from 'react'
import MainLayout from "../layouts/MainLayout"
import HomeSection from "../components/Sections/HomeSection"
import WhatWeDoSection from "../components/Sections/WhatWeDoSection"
import ContactUsSection from "../components/Sections/ContactUsSection";
import PriceBlackMetalSection from "../components/Sections/PriceBlackMetalSection";
import Calculator from "../components/Sections/Calculator";
import RoadmapSection from "../components/Sections/RoadmapSection";
import AboutUsSection from "../components/Sections/AboutUsSection";
import ContactUsMiniSection from "../components/Sections/ContactUsMiniSection";

function MainPage() {
  return (
    <MainLayout>
      <HomeSection />
      <WhatWeDoSection />
      <ContactUsSection />
      <PriceBlackMetalSection />
      <Calculator />
      <RoadmapSection />
      <AboutUsSection />
      <ContactUsMiniSection />
    </MainLayout>
  )
}

export default MainPage
