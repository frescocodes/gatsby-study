import React from "react"
import { Link } from "gatsby"

const links = ["About", "Contact", "Blog"]

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">GatsbyJS Study</Link>
        {window.location.href !== "http://localhost:8000/" ? (
          <Link to="/">Home</Link>
        ) : (
          <></>
        )}

        <ul>
          {links.map(link => (
            <li>
              <Link to={`/${link}`.toLowerCase()}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
