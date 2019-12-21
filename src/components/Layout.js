import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import "../styles/index.css"

const Layout = props => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  )
}

export default Layout
