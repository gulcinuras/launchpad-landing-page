import * as activeProjectsStyles from "./activeProjects.module.scss"

import React from "react"
import classNames from "classnames"

import Card from "../../components/card/card"
import Button from "../../components/button/button"
import { StaticImage } from "gatsby-plugin-image"

function ActiveProjects() {
  return (
    <section
      className={classNames(
        "is-flex-column",
        activeProjectsStyles.activeProjects
      )}
    >
      <div
        className={classNames(
          activeProjectsStyles.titleAndDescription,
          "is-centered"
        )}
      >
        <h2 className={"typography--h2"}>{`Active projects \n on Branch`}</h2>

        <p className={"typography--caption"}>
          {
            "Be a part of our upcoming raises by signing up and completing the KYC process. All auctions are securely and transparently conducted on-chain. "
          }
        </p>
      </div>

      <Card customClassName={activeProjectsStyles.projectDetailsCard}>
        <div className={"is-flex-column"}>
          <span
            className={classNames(
              activeProjectsStyles.neutronLogo,
              "is-centered"
            )}
          >
            <StaticImage
              src={"../../icons/neutron_logo.svg"}
              alt={"neutron logo"}
            />
          </span>

          <h3 className={"typography--h3"}>{"Neutron Smart Contract"}</h3>

          <p className={activeProjectsStyles.projectDescription}>
            {
              "The most secure CosmWasm platform in Cosmos, Neutron lets smart-contracts leverage bleeding-edge Interchain technology with minimal overhead"
            }
          </p>

          <Button customClassName={activeProjectsStyles.projectDetailsButton}>
            {"Show project details"}
          </Button>
        </div>

        <StaticImage
          className={activeProjectsStyles.projectImage}
          src={"../../images/neutron.png"}
          alt={"neutron"}
        />
      </Card>
    </section>
  )
}

export default ActiveProjects
