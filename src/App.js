import React, {useEffect, useState} from 'react'
import styles from './styles/App.module.sass'
import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/MainPage"
import { ROUTES } from "./constants/ROUTES"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import DismantlingPage from "./pages/DismantlingPage"
import ReviewsPage from "./pages/ReviewsPage"
import VacancyPage from "./pages/VacancyPage"
import ContactsPage from "./pages/ContactsPage"
import PricePage from "./pages/PricePage"
import AppContext from "./contexts/AppContext"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

function App() {
  // useEffect(() => {
  //   const iframe = document.querySelector("iframe")
  //   if (iframe) return iframe.style.display = 'none'
  // }, [])

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCalculationPopupOpen, setIsCalculationPopupOpen] = useState(false)
  const [isSpecialOfferPopup, setIsSpecialOfferPopup] = useState(false)
  const [isToastOpen, setIsToastOpen] = useState(false)
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const [calculatedData, setCalculatedData] = useState(0)
  const [metalGroup, setMetalGroup] = useState('чёрный металл')

  const { MAIN, ABOUT, SERVICES, DISMANTLING, REVIEWS, VACANCY, PRICE, CONTACTS } = ROUTES

  const appValues = {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isCalculationPopupOpen,
    setIsCalculationPopupOpen,
    isSpecialOfferPopup,
    setIsSpecialOfferPopup,
    isToastOpen,
    setIsToastOpen,
    isBurgerActive,
    setIsBurgerActive,
    metalGroup,
    setMetalGroup,
    calculatedData,
    setCalculatedData,
  }

  // disable body scroll when burger menu open
  useEffect(() => {
    const menu = document.querySelector('#burgerMenu')

    if (isBurgerActive || isMobileMenuOpen) return disableBodyScroll(menu)
    return enableBodyScroll(menu)

  }, [isBurgerActive, isMobileMenuOpen])
  //

  return (
    <div className={styles.app}>
      <AppContext.Provider value={appValues}>
        <Routes>
          <Route path={MAIN} element={<MainPage />} />
          <Route path={ABOUT} element={<AboutPage />} />
          <Route path={SERVICES} element={<ServicesPage />} />
          <Route path={DISMANTLING} element={<DismantlingPage />} />
          <Route path={REVIEWS} element={<ReviewsPage />} />
          <Route path={VACANCY} element={<VacancyPage />} />
          <Route path={PRICE} element={<PricePage />} />
          <Route path={CONTACTS} element={<ContactsPage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App
