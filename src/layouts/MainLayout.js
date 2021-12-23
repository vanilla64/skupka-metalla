import React from 'react'
import Header from "../components/Header/Header"
import Main from "../components/Sections/Main"

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Main>
        { children }
      </Main>
      {/*<Footer></Footer>*/}
    </>
  )
}

export default MainLayout
