import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import "../styles/index.scss"
import { container, content } from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={container}>
      <div className={content}>
        <Header />
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
