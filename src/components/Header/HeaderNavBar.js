import React from 'react'
import styles from "../../styles/Header.module.sass"
import Logo from "../Logo"
import HeaderNavigation from "./HeaderNavigation"
import Phones from "./Phones";

function HeaderNavBar() {
  return (
    <div className={`${styles.navBar}`}>
      {/*<div className="container">*/}
        <div className={styles.navBarWrap}>
          <Logo />
          <HeaderNavigation />
          <Phones />
        </div>
      {/*</div>*/}
    </div>
  )
}

export default HeaderNavBar
