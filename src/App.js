import React, { useEffect } from 'react'
import styles from './styles/App.module.sass'
import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/MainPage"

function App() {
  useEffect(() => {
    const iframe = document.querySelector("iframe")
    if (iframe) return iframe.style.display = 'none'
  }, [])

  return (
    <div className={styles.app}>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
