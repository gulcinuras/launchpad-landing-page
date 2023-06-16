import * as joinBranchStyles from "./joinBranch.module.scss"

import React from "react"
import classNames from "classnames"

import Button from "../../components/button/button"

function JoinBranch() {
  return (
    <section
      className={classNames(joinBranchStyles.joinBranch, "has-space-between")}
    >
      <h2 className={"typography--h2"}>{"Be part of the conversation join Branch"}</h2>

      <div className={classNames("is-flex-column", joinBranchStyles.description)}>
        <p className={"typography--caption"}>
          {
            "Come with us on a revolutionary journey, as we break the mold, unleash the power of blockchain, and transform the investment landscape."
          }
        </p>

        <Button>{"Join Branch now"}</Button>
      </div>
    </section>
  )
}

export default JoinBranch
