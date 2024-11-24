import React from "react";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="transition-opacity duration-500 ease-in-out  animate-fade-in">
      {children}
    </div>
  );
};

export default PageWrapper;
