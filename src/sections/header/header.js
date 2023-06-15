import * as React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as headerStyles from "./header.module.scss"

function Header() {
  return (
    <header className={classNames(headerStyles.header, "has-space-between", "is-vertically-centered")}>
      <div className={classNames("is-vertically-centered", headerStyles.logo)}>
        <StaticImage src={"../../icons/branch_logo.svg"} alt={"branch logo"} />

        <p className={"typography--logo"}>{"branch"}</p>
      </div>

      <div className={headerStyles.links}>
        <Link>{"Projects"}</Link>

        <Link>{"Investors"}</Link>

        <Link>{"Resources"}</Link>

        <Link>{"About"}</Link>
      </div>

      <Link>{"Join Branch now"}</Link>
    </header>
  )
}

export default Header
