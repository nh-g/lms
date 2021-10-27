import React from "react";
import { CSSTransitionGroup } from "react-transition-group-v1";

export default function AnimateContainer({ children, animation }) {
  return (
    <CSSTransitionGroup
      transitionName={animation}
      transitionAppear={true}
      transitionAppearTimeout={400}
    >
      {children}
    </CSSTransitionGroup>
  );
}
