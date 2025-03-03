import React from "react";

const Status = ({ color, label }) => {
  return <div className={`status ${color}`}>{label}</div>;
};

export default Status;
