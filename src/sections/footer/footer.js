import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import classNames from "classnames"

import * as footerStyles from "./footer.module.scss"

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { title: "Projects", url: "" },
      { title: "Feed", url: "" },
      { title: "Community", url: "" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { title: "Investment Platform", url: "" },
      { title: "Community Hub", url: "" },
      { title: "Research", url: "" },
      { title: "Website Builder", url: "" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Support", url: "" },
      { title: "Blog", url: "" },
      { title: "Contact us", url: "" },
      { title: "Branch Technical & API", url: "" },
      { title: "Developers", url: "" },
    ],
  },
]

function Footer() {
  return (
    <footer className={classNames(footerStyles.footer, "has-space-between")}>
      <div
        className={classNames("is-flex-column", footerStyles.logoAndCopyright)}
      >
        <div
          className={classNames("is-vertically-centered", footerStyles.logo)}
        >
          <StaticImage src={"../../icons/branch_logo.svg"} alt={"branch logo"} />

          <p className={"typography--logo"}>{"branch"}</p>
        </div>
        
        <p
          className={footerStyles.copyright}
        >{`© 2023 Branch.co \n All rights reserved`}</p>
      </div>

      <div className={classNames("has-space-between", footerStyles.links)}>
        {FOOTER_LINKS.map(section => (
          <ul
            className={classNames(
              "is-flex-column",
              footerStyles.linkSection
            )}
          >
            <p
              className={classNames(
                "typography--tiny",
                footerStyles.linkSectionTitle
              )}
            >
              {section.title}
            </p>

            <div className={"is-flex-column"}>
              {section.links.map(link => (
                <a className={"typography--tiny is-flex-column"} href={link.url}>
                  {link.title}
                </a>
              ))}
            </div>
          </ul>
        ))}
      </div>
    </footer>
  )
}

export default Footer
