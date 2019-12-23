import React from "react"
import { Link } from "gatsby"

import { header, navLink, navList, siteName } from "./header.module.scss"

const links = ["Home", "About", "Contact", "Blog"]

const Header = () => {
  return (
    <header className={header}>
      <nav>
        <h1>
          <Link to="/" className={siteName}>
            GatsbyJS Study
          </Link>
        </h1>
        <ul className={navList}>
          {links.map(link =>
            link == "Home" ? (
              <Link to="/" className={navLink}>
                {link}
              </Link>
            ) : (
              <li>
                <Link to={`/${link}`.toLowerCase()} className={navLink}>
                  {link}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
