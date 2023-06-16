import confirmViaBlockChainImage from "../../images/confirm-via-blockChain.png"
import invesmentApproachImage from "../../images/investment-approach.png"

import * as howItWorksStyles from "./howItWorks.module.scss"

import React from "react"

import Card from "../../components/card/card"
import classNames from "classnames"

const HOW_IT_WORKS_ITEMS = [
  {
    key: "A straightforward approach",
    title: "Make investing easy with Branch",
    img: invesmentApproachImage,
    description:
      "You will have access to the comprehensive research conducted by the most experienced research teams.",
  },
  {
    key: "It is fair for all participants",
    title: "Confirm via blockchain",
    img: confirmViaBlockChainImage,
    description:
      "Ensuring fairness for all bidders is paramount, once the auction is complete, all transactions will be viewable on-chain.",
  },
]

function HowItWorks() {
  return (
    <Card customClassName={howItWorksStyles.howItWorks}>
      {HOW_IT_WORKS_ITEMS.map(item => (
        <div
          key={item.key}
          className={classNames(
            "is-flex-column",
            howItWorksStyles.howItWorksItem
          )}
        >
          <p className={howItWorksStyles.howItWorksItemKey}>{item.key}</p>

          <h4 className={"typography--h4"}>{item.title}</h4>

          <div className={classNames(howItWorksStyles.howItWorksItemImgContainer, "is-centered")}>
            <img src={item.img} alt={item.title} />
          </div>

          <p className={classNames("typography--caption",howItWorksStyles.howItWorksItemDescription)}>{item.description}</p>
        </div>
      ))}
    </Card>
  )
}

export default HowItWorks
