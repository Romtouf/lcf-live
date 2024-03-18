import React from "react";
import logoLCF from "../../assets/logo-lcf-1.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__image">
        <img src={logoLCF} alt="Logo du Lisieux Club Futsal"></img>
      </div>
      <div className="footer__text">
        <span>
          © 2021 LCF. All <br className="br-none" /> rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
