import React from "react"

import Seo from "../sections/seo"
import Hero from "../sections/hero/hero"
import Layout from "../components/layout/Layout"

const IndexPage = () => (
  <Layout>
    <Hero />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
