import React, { forwardRef, memo } from "react";
import { Link } from "react-router-dom";
import { Routes } from "@app/app-routing.components";
import { useRxEffect } from "@utilities/utils";
import { $API } from "@services/api.service";
import { RouterOutlet } from "@app/shared/component/router-outlet";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@app/shared/component/error-fallback";

interface Props {}

export interface Ref {}

export const AppComponent = memo(
  forwardRef<Ref, Props>(() => {
    useRxEffect(
      () =>
        $API.getHash().subscribe((res) => {
          console.log(
            "gaga---------asdsadasdas--------------------------",
            res
          );
        }),
      []
    );

    return (
      <>
        <div className="left-col">
          <ul>
            <li>
              <Link to="/policy/pocket-guide">Pocket Guide App</Link>
            </li>
            <li>
              <Link to="/policy/doraemon">Story of Seasons - Doraemon</Link>
            </li>
            <li>
              <Link to="/policy/fomt">
                Story of Seasons - Friends of Mineral Town
              </Link>
            </li>
            <li>
              <Link to="/policy/stardew">Stardew Valley</Link>
            </li>
            <li>
              <Link to="/policy/poot">
                Story of Seasons - Pioneer of Olive Town
              </Link>
            </li>
            <li>
              <Link to="/policy/pocket-guide-mh">
                Pocket Guide - Monster Hunter
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-col">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <RouterOutlet routes={Routes} />
          </ErrorBoundary>
        </div>
      </>
    );
  })
);
