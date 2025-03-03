import React, { useEffect, useState } from "react";
import comandImg from "../../img/command.png";

const LoaderFromAPI = () => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    setTimeout(() => setClosed(true), 4000);
  }, []);

  return (
    <div className={`app-loader ${closed ? "hide" : ""}`}>
      <div className="left">
        <img src={comandImg} alt="player icon" />
      </div>
      <div className="right">
        <img src={comandImg} alt="player icon" />
      </div>
    </div>
  );
};

export default LoaderFromAPI;
