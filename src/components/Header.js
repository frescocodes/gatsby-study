import React from "react"
import { Link } from "gatsby"

import { header, navLink, navList } from "./header.module.scss"

const links = ["About", "Contact", "Blog"]

const Header = () => {
  return (
    <header className={header}>
      <nav>
        <Link to="/">GatsbyJS Study</Link>
        {/* {window.location.href !== "http://localhost:8000/" ? (
          <Link to="/">Home</Link>
        ) : (
          <></>
        )} */}

        <ul className={navList}>
          {links.map(link => (
            <li>
              <Link to={`/${link}`.toLowerCase()} className={navLink}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
