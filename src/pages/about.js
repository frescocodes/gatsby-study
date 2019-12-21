import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1>About Me</h1>
        <p>
          Exercitation consequat nostrud Lorem anim sit aliquip dolore deserunt
          incididunt mollit laborum excepteur do. Excepteur eu magna ut mollit
          laboris labore quis ut laborum irure do laboris. Nostrud minim
          consequat deserunt voluptate voluptate do aute reprehenderit ullamco
          incididunt dolor Lorem.
        </p>
        <p>
          Need a developer? <Link to="/contact">Get in touch.</Link>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
