import React, { forwardRef, memo } from "react";

interface Props {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

export interface Ref {}

export const ErrorFallback = memo(
  forwardRef<Ref, Props>(({ error, resetErrorBoundary }) => {
    console.log("PortalGuideComponent-------------------------------------");

    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  })
);
