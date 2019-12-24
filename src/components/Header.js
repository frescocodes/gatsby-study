import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import {
  header,
  navLink,
  navList,
  siteName,
  activeNavItem,
} from "./header.module.scss"

const links = ["Home", "About", "Contact", "Blog"]

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const { title, author } = data.site.siteMetadata

  return (
    <header className={header}>
      <nav>
        <h1>
          <Link to="/" className={siteName}>
            {title}
          </Link>
        </h1>
        <ul className={navList}>
          {links.map(link =>
            link == "Home" ? (
              <Link to="/" className={navLink} activeClassName={activeNavItem}>
                {link}
              </Link>
            ) : (
              <li>
                <Link
                  to={`/${link}`.toLowerCase()}
                  className={navLink}
                  activeClassName={activeNavItem}
                >
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
