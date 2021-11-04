import React, { forwardRef, memo } from "react";
import { Routing } from "@interfaces/interfaces";
import { AppRoutingComponent } from "@app/app-routing.components";
import { Switch } from "react-router-dom";

interface Props {
  routes: Routing[];
}

export interface Ref {}

export const RouterOutlet = memo(
  forwardRef<Ref, Props>((props) => {
    return (
      <Switch>
        <>
          {props.routes.map((route, i) => (
            <AppRoutingComponent key={`app-${i}}`} route={route} />
          ))}
        </>
      </Switch>
    );
  })
);
