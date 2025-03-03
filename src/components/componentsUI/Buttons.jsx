import React from "react";
import refreshImg from "../../img/Refresh.svg";

const Button = ({ isLoading, init }) => {
  return (
    <button className="btn" onClick={init}>
      <span className="label">Обновить</span>
      {isLoading && (
        <img className="loading" src={refreshImg} alt="Button loading icon" />
      )}
    </button>
  );
};

export default Button;
