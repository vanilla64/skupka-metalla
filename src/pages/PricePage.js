import React from 'react'
import MainLayout from "../layouts/MainLayout"
import HomeSection from "../components/Sections/HomeSection"
import WhyWeFirstSection from "../components/Sections/WhyWeFirstSection"
import GuaranteesSection from "../components/Sections/GuaranteesSection"
import BecomeOurClient from "../components/Sections/BecomeOurClient"
import PartnersSection from "../components/Sections/PartnersSection"
import ReviewsSection from "../components/Sections/ReviewsSection"
import Calculator from "../components/Sections/Calculator"
import TablePriceSection from "../components/Sections/TablePriceSection"

function PricePage() {
  return (
    <MainLayout>
      <HomeSection />
      <TablePriceSection />
      <Calculator />
      <WhyWeFirstSection />
      <GuaranteesSection />
      <BecomeOurClient />
      <PartnersSection />
      <ReviewsSection />
    </MainLayout>
  )
}

export default PricePage
