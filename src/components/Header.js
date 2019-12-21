import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav>
        {window.location.href !== "http://localhost:8000/" ? (
          <Link to="/">Home</Link>
        ) : (
          <></>
        )}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  )
}

export default Header
