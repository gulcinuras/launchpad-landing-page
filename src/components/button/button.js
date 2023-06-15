import React from "react"
import classNames from "classnames"

import * as buttonStyles from "./button.module.scss"

function Button({ children, customClassName }) {
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
