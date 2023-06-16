import * as cardStyles from "./card.module.scss";

import React from "react";
import classNames from "classnames";

function Card({children, customClassName}) {
  return (
    <div
      className={classNames(
        cardStyles.card,
        customClassName
      )}>
      {children}
    </div>
  );
}

export default Card;
