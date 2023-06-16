import * as React from "react"
import classNames from "classnames"
import { StaticImage } from "gatsby-plugin-image"

import * as headerStyles from "./header.module.scss"

function Header() {
  return (
    <header
      className={classNames(
        headerStyles.header,
        "has-space-between",
        "is-vertically-centered"
      )}
    >
      <div className={classNames("is-vertically-centered", headerStyles.logo)}>
        <StaticImage src={"../../icons/branch_logo.svg"} alt={"branch logo"} />

        <p className={"typography--logo"}>{"branch"}</p>
      </div>

      <div className={headerStyles.links}>
        <p>{"Projects"}</p>

        <p>{"Investors"}</p>

        <p>{"Resources"}</p>

        <p>{"About"}</p>
      </div>

      <p>{"Join Branch now"}</p>
    </header>
  )
}

export default Header
