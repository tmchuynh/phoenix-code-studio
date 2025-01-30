import React from "react";

const Highlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <span className="underline underline-offset-4 text-primary">
        {children}
      </span>
    </>
  );
};

export default Highlight;
