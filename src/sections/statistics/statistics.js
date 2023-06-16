import * as statisticsStyles from "./statistics.module.scss"

import classNames from "classnames"
import React from "react"

import Button from "../../components/button/button"

function Statistics() {
  return (
    <section
      className={classNames(
        statisticsStyles.statistics,
        "is-vertically-centered"
      )}
    >
      <div className={"is-flex-column"}>
        <h2 className={classNames(statisticsStyles.title, "typography--h2")}>
          {"An investment platform that evolves with its community"}
        </h2>

        <p
          className={classNames(
            statisticsStyles.description,
            "typography--caption"
          )}
        >
          {
            "At Branch, we understand how essential trust is in the blockchain space. That's why we maintain the highest standards of due diligence and transparency."
          }
        </p>

        <Button customClassName={statisticsStyles.joinBranchButton}>
          {"Join Branch now"}
        </Button>
      </div>

      <div
        className={classNames(
          "is-flex-column",
          statisticsStyles.statisticsData
        )}
      >
        <div>
          <h1 className={"typography--h1"}>{"$150M"}</h1>

          <p>{"has been raised by projects that launched on Branch"}</p>
        </div>

        <div>
          <h1 className={"typography--h1"}>{"7,500+"}</h1>

          <p>{"verified investors are waiting for the next big project"}</p>
        </div>
      </div>
    </section>
  )
}

export default Statistics
