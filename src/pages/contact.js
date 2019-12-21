import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

const ContactPage = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Contact</h1>
        <a href="mailto:rapper@viper.com">rapper@viper.com</a>
        <p>Phone: 666-420-6969</p>
        <a href="https://twitter.com/RapperViper" target="_blank">
          Twitter
        </a>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage
