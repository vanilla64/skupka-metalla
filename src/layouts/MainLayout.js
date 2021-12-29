import React from 'react'
import Header from "../components/Header/Header"
import Main from "../components/Sections/Main"
import Footer from "../components/Footer/Footer"

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Main>
        { children }
      </Main>
      <Footer />
    </>
  )
}

export default MainLayout
