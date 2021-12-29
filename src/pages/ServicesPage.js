import React from 'react'
import MainLayout from "../layouts/MainLayout";
import HomeSection from "../components/Sections/HomeSection";
import ContactUsSection from "../components/Sections/ContactUsSection";
import WhyWeFirstSection from "../components/Sections/WhyWeFirstSection";
import GuaranteesSection from "../components/Sections/GuaranteesSection";
import BecomeOurClient from "../components/Sections/BecomeOurClient";
import PartnersSection from "../components/Sections/PartnersSection";
import ReviewsSection from "../components/Sections/ReviewsSection";
import AboutTextContent from "../components/Sections/AboutTextContent";
import Calculator from "../components/Sections/Calculator";
import RoadmapSection from "../components/Sections/RoadmapSection";

function ServicesPage() {
  return (
    <MainLayout>
      <HomeSection />
      <ContactUsSection />
      <AboutTextContent />
      <WhyWeFirstSection />
      <Calculator />
      <RoadmapSection />
      <GuaranteesSection />
      <BecomeOurClient />
      <PartnersSection />
      <ReviewsSection />
    </MainLayout>
  )
}

export default ServicesPage
