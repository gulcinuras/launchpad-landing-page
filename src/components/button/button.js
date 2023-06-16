import * as buttonStyles from "./button.module.scss"

import React from "react"
import classNames from "classnames"

function Button({children, customClassName}) {
  return (
    <button
      className={classNames(
        buttonStyles.button,
        "typography--caption",
        customClassName
      )}
    >
      {children}
    </button>
  )
}

export default Button