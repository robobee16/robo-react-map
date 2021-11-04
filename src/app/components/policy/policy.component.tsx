import React, { forwardRef, memo } from "react";
import { Routing } from "@interfaces/interfaces";
import { Routes } from "@app/app-routing.components";
import { RouterOutlet } from "@app/shared/component/router-outlet";

interface Props {
  routes: Routing[];
}

export interface Ref {}

export const PolicyComponent = memo(
  forwardRef<Ref, Props>((props, ref) => {
    return (
      <>
        <RouterOutlet routes={props.routes} />
      </>
    );
  })
);
