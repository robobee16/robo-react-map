import React, { memo } from "react";
import { Route } from "react-router-dom";
import { Routing } from "@interfaces/interfaces";
import { PageComponent } from "@components/page/page.component";
import { Page1Component } from "@components/page/page1.component";
import { Page2Component } from "@components/page/page2.component";

export const Routes: Routing[] = [
  {
    path: "/page",
    component: PageComponent,
    routes: [
      {
        path: "/page/1",
        component: Page1Component,
      },
      {
        path: "/page/2",
        component: Page2Component,
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
