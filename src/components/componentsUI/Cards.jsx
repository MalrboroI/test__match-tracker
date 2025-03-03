import React from "react";

const Card = ({ classes, children }) => {
  return <div className={`card ${classes}`}>{children}</div>;
};

export default Card;