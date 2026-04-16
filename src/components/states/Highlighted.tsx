import React from "react";

const EmphasizeText = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <span className="text-primary dark:text-chart-1 dark:font-extrabold">
        {children}
      </span>
    </>
  );
};

export default EmphasizeText;
