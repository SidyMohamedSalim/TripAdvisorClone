import clsx from "clsx";
import React, { PropsWithChildren, PropsWithoutRef } from "react";

const CenterLayer = ({
  children,
  classname,
}: PropsWithChildren<{ classname?: string }>) => {
  return (
    <div className={clsx("container max-w-4xl mx-auto py-2", classname)}>
      {children}
    </div>
  );
};

export default CenterLayer;
