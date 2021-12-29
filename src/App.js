import React, { useEffect } from 'react'
import styles from './styles/App.module.sass'
import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/MainPage"
import { ROUTES } from "./constants/ROUTES"

import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage";

function App() {
  useEffect(() => {
    const iframe = document.querySelector("iframe")
    if (iframe) return iframe.style.display = 'none'
  }, [])

  const { MAIN, ABOUT, SERVICES, REVIEWS, PRICE, CONTACTS } = ROUTES

  return (
    <div className={styles.app}>
      <Routes>
        <Route path={MAIN} element={<MainPage />} />
        <Route path={ABOUT} element={<AboutPage />} />
        <Route path={SERVICES} element={<ServicesPage />} />
      </Routes>
    </div>
  )
}

export default App
