import React from "react"
import classNames from "classnames"

import * as heroStyles from "./hero.module.scss"
import Button from "../../components/button/button"

function Hero() {
  return (
    <div
      className={classNames("is-centered", "is-flex-column", heroStyles.hero)}
    >
      <h1 className={"typography--h1"}>{"A new way to invest"}</h1>

      <p className={classNames("typography--caption", heroStyles.description)}>
        {`We value the future of finance, which is why we have created an investment platform that is verifiable, regulated and \n community-focused.`}
      </p>

      <Button customClassName={heroStyles.joinBranchButton}>{"Join Branch now"}</Button>

      <p className={heroStyles.subDescription}>{"Backed by the best VCs and the research teams in the blockchain space."}</p>
    </div>
  )
}

export default Hero
