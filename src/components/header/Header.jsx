import React from "react";
import UpdateButton from "../componentsUI/Buttons";
import HeaderLogo from "./HeaderLogo";
import errorImg from "../../img/error.svg";

const Header = ({ loading, error, matches }) => {
  return (
    <header className="header">
      <HeaderLogo />
      <div className="left">
        {error && (
          <div className="error-card">
            <img
              className="error-icon"
              src={errorImg}
              alt="loading error icon"
            />
            <span className="error-text">
              Ошибка: не удалось загрузить информацию
            </span>
          </div>
        )}
        <UpdateButton isLoading={loading} init={matches} />
      </div>
    </header>
  );
};

export default Header;
