
import React from "react";

interface Props {
  title: string; // Define the type of the title prop
}

const FooterListTitle: React.FC<Props> = ({ title }) => {
  return <h3 className="text-xl font-bodyFont font-semibold mb-6">{title}</h3>;
};

export default FooterListTitle;
