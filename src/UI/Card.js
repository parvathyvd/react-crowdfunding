import React, { useContext } from "react";
import { useGlobalContext } from "../context/CrowdContext";

const Card = ({ children, className }) => {
  let name;
  if (className === undefined) {
    name = "";
  } else {
    name = className;
  }
  const crowdContext = useGlobalContext();
  return <div className={`card ${name}`}>{children}</div>;
};

export default Card;
