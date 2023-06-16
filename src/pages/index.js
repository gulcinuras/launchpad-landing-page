import * as indexStyles from "./index.module.scss"

import React from "react"

import Seo from "../sections/seo"
import Hero from "../sections/hero/hero"
import Layout from "../components/layout/layout"
import ActiveProjects from "../sections/active-projects/activeProjects"
import FeatureWalkthrough from "../sections/feature-walkthrough/featureWalkthrough"
import Statistics from "../sections/statistics/statistics"
import HowItWorks from "../sections/how-it-works/howItWorks"
import JoinBranch from "../sections/join-branch/joinBranch"

const IndexPage = () => (
  <Layout>
    <Hero />

    <ActiveProjects />

    <FeatureWalkthrough />

    <div className={indexStyles.purpleBg} />

    <Statistics />

    <HowItWorks />

    <JoinBranch />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
