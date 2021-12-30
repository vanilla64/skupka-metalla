import React from 'react'
import Header from "../components/Header/Header"
import Main from "../components/Sections/Main"
import Footer from "../components/Footer/Footer"
import FixedMenu from "../components/FixedMenu/FixedMenu";
import PopupMenu from "../components/PopupMenu";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Main>
        { children }
      </Main>
      <PopupMenu />
      <FixedMenu />
      <Footer />
    </>
  )
}

export default MainLayout
