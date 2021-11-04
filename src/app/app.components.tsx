import React, { forwardRef, memo } from "react";
import { Link } from "react-router-dom";
import { Routes } from "@app/app-routing.components";
import { RouterOutlet } from "@app/shared/component/router-outlet";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@app/shared/component/error-fallback";

interface Props {}

export interface Ref {}

export const AppComponent = memo(
  forwardRef<Ref, Props>(() => {
    return (
      <>
        <div className="left-col">
          <ul>
            <li>
              <Link to="/page/1">Page 1</Link>
            </li>
            <li>
              <Link to="/page/2">Page 2</Link>
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
