import React, { useContext, useEffect } from 'react'
import MainLayout from "../layouts/MainLayout"
import HomeSection from "../components/Sections/HomeSection"
import WhatWeDoSection from "../components/Sections/WhatWeDoSection"
import ContactUsSection from "../components/Sections/ContactUsSection"
import Calculator from "../components/Sections/Calculator"
import RoadmapSection from "../components/Sections/RoadmapSection"
import ContactUsMiniSection from "../components/Sections/ContactUsMiniSection"
import SectionWithImage from "../components/Sections/SectionWithImage"
import ExportSection from "../components/Sections/ExportSection"
import WhyWeFirstSection from "../components/Sections/WhyWeFirstSection"
import GuaranteesSection from "../components/Sections/GuaranteesSection"
import BecomeOurClient from "../components/Sections/BecomeOurClient"
import PartnersSection from "../components/Sections/PartnersSection"
import ReviewsSection from "../components/Sections/ReviewsSection"
import TablePriceSection from "../components/Sections/TablePriceSection"
import AppContext from "../contexts/AppContext"

function MainPage() {
  const { setIsSpecialOfferPopup, setIsFixedPopupOpen } = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => {
        setIsSpecialOfferPopup(true)
    }, 5000)

    setTimeout(() => {
      setIsFixedPopupOpen(true)
    }, 10000)
      // eslint-disable-next-line
  }, [])

  return (
    <MainLayout>
      <HomeSection />
      <WhatWeDoSection />
      <ContactUsSection />
      <TablePriceSection />
      <Calculator />
      <RoadmapSection />
      <SectionWithImage />
      <ContactUsMiniSection />
      <ExportSection />
      <WhyWeFirstSection />
      <GuaranteesSection />
      <BecomeOurClient />
      <PartnersSection />
      <ReviewsSection />
    </MainLayout>
  )
}

export default MainPage
