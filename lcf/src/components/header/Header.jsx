import React from "react";
import logoLCF from "../../assets/logo-lcf-1.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logoLCF} alt="logo du Lisieux Club Futsal" />
      </div>
    </div>
  );
};

export default Header;
