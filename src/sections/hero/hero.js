import * as heroStyles from "./hero.module.scss"

import classNames from "classnames"
import React from "react"

import Button from "../../components/button/button"
import { StaticImage } from "gatsby-plugin-image"

function Hero() {
  return (
    <section
      className={classNames("is-centered", "is-flex-column", heroStyles.hero)}
    >
      <h1 className={"typography--h1"}>{"A new way to invest"}</h1>

      <p className={classNames("typography--caption", heroStyles.description)}>
        {`We value the future of finance, which is why we have created an investment platform that is verifiable, regulated and \n community-focused.`}
      </p>

      <Button customClassName={heroStyles.joinBranchButton}>
        {"Join Branch now"}
      </Button>

      <p className={heroStyles.subDescription}>
        {
          "Backed by the best VCs and the research teams in the blockchain space."
        }
      </p>

      <div
        className={classNames(
          heroStyles.partnerships,
          "is-vertically-centered"
        )}
      >
        <StaticImage
          src={"../../icons/coinbase_logo.svg"}
          alt={"coinbase logo"}
        />

        <StaticImage
          src={"../../icons/delphi_ventures_logo.svg"}
          alt={"delphi ventures logo"}
        />

        <StaticImage
          src={"../../icons/a16zcrypto_logo.svg"}
          alt={"a16zcrypto logo"}
        />
      </div>
    </section>
  )
}

export default Hero
