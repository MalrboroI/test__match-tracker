import React from "react";
import UpdateButton from "../componentsUI/Buttons";
import HeaderLogo from "./HeaderLogo";
import errorImg from "../../img/error.svg";

const Header = ({ loading, error, matches }) => {
  return (
    <header className="header">
      <HeaderLogo />
      <div className="right">
        {error && (
          <div className="error-message">
            <img
              className="error-img"
              src={errorImg}
              alt="loading error icon"
            />
            <span className="error-text ">
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
