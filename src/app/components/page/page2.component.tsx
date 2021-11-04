import React, { forwardRef, memo } from "react";

interface Props {}

export interface Ref {}

export const Page2Component = memo(
  forwardRef<Ref, Props>(() => {
    return (
      <div className={"page-wrap"}>
        <strong>Page 2</strong>
      </div>
    );
  })
);
