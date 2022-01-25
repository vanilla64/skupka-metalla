import React, { useEffect } from 'react'
import Header from "../components/Header/Header"
import Main from "../components/Sections/Main"
import Footer from "../components/Footer/Footer"
import FixedMenu from "../components/FixedMenu/FixedMenu"
import PopupMenu from "../components/PopupMenu"
import PriceCalculationPopup from "../components/PriceCalculationPopup"
import SpecialOfferPopup from "../components/SpecialOfferPopup"
import Toast from "../components/Toast"
import FixPricePopup from "../components/FixPricePopup"
import ContactUsPopupWithMessage from "../components/ContactUsPopupWithMessage"

function MainLayout({ children }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      x: 0,
      y: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <>
      <Header />
      <Main>
        { children }
      </Main>
      <PopupMenu />
      <FixedMenu />
      <Footer />
      <PriceCalculationPopup />
      <SpecialOfferPopup />
      <ContactUsPopupWithMessage />
      <FixPricePopup />
      <Toast />
    </>
  )
}

export default MainLayout
