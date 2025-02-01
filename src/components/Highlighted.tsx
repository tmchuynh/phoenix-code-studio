import React from "react";

const EmphasizeText = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <span className="text-primary">{children}</span>
    </>
  );
};

export default EmphasizeText;
