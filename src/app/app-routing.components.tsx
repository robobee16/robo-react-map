import React, { memo } from "react";
import { Route } from "react-router-dom";
import { Routing } from "@interfaces/interfaces";
import { PolicyComponent } from "@components/policy/policy.component";
import { PolicyMh } from "@components/policy/game-list/pocket-guide-mh";
import { PolicyPoOT } from "@components/policy/game-list/poot";
import { PolicyFoMT } from "@components/policy/game-list/fomt";
import { PolicyDoraemon } from "@components/policy/game-list/doraemon";
import { PolicyPocketGuide } from "@components/policy/game-list/pocket-guide";
import { PolicyStardew } from "@components/policy/game-list/stardew";

export const Routes: Routing[] = [
  {
    path: "/policy",
    component: PolicyComponent,
    routes: [
      {
        path: "/policy/poot",
        component: PolicyPoOT,
      },
      {
        path: "/policy/fomt",
        component: PolicyFoMT,
      },
      {
        path: "/policy/dor",
        component: PolicyDoraemon,
      },
      {
        path: "/policy/pocket-guide",
        component: PolicyPocketGuide,
      },
      {
        path: "/policy/stardew",
        component: PolicyStardew,
      },
      {
        path: "/policy/pocket-guide-mh",
        component: PolicyMh,
      },
    ],
  },
];

export const AppRoutingComponent = memo(({ route }: { route: Routing }) => {
  console.log(
    "AppRoutingComponent-------------------------------------",
    route.path
  );
  return (
    <Route
      path={route.path}
      render={(props) => {
        return (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        );
      }}
    />
  );
});
