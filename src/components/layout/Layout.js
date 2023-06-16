/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import React from "react"

import Header from "../../sections/header/header"
import Footer from "../../sections/footer/footer"
import * as layoutStyles from "./Layout.module.scss"

const Layout = ({ children }) => {
  /*   const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
 */
  return (
    <div className={layoutStyles.layout}>
      <Header />

      <main className={layoutStyles.container}>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
