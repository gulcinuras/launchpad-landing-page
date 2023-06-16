import * as featureWalkthroughStyles from "./featureWalkthrough.module.scss"

import launchIcon from "../../icons/launchpad.svg"
import investorsIcon from "../../icons/investors.svg"
import multichainIcon from "../../icons/multi_chain.svg"

import React from "react"
import classNames from "classnames"

const FEATURES_WALKTHROUGH_ITEMS = [
  {
    id: "launch-assistance",
    icon: launchIcon,
    title: "Launch the right way",
    description:
      "Do you need assistance in raising funds for your project? We can provide you with the guidance you need to get your raise off the ground.",
  },
  {
    id: "know-your-investors",
    icon: investorsIcon,
    title: "Know your investors",
    description:
      "We understand that KYC is a delicate matter, and we guarantee that all transactions are verifiable and in compliance with the regulator's guidelines.",
  },
  {
    id: "multi-chain",
    icon: multichainIcon,
    title: "We believe in a multi chain future",
    description:
      "Branch offers the ability to scale to any blockchain, giving users the freedom to pick the chain that is best suited to their needs.",
  },
]

function FeatureWalkthrough() {
  return (
    <section
      className={classNames(
        featureWalkthroughStyles.featureWalkthrough,
        "has-space-between"
      )}
    >
      {FEATURES_WALKTHROUGH_ITEMS.map(item => (
        <div
          key={item.id}
          className={classNames(
            "is-flex-column",
            featureWalkthroughStyles.featureWalkthroughItem
          )}
        >
          <img src={item.icon} alt={item.id} />

          <h6 className={"typography--caption"}>{item.title}</h6>

          <p>{item.description}</p>
        </div>
      ))}
    </section>
  )
}

export default FeatureWalkthrough
