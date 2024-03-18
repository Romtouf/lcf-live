import React from "react";
import { useState, useEffect } from "react";
import loaderVideo from "../../assets/loader.mp4";
import loaderLogo from "../../assets/logo-lcf-1.svg";

const Loader = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showText, setShowText] = useState(false);

  const textToShow = "L'HISTOIRE S'ÉCRIT ICI !";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
    }, 6000);

    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="loader-container">
          <video className="background-video" autoPlay loop muted>
            <source src={loaderVideo} type="video/mp4" />
          </video>
          <img
            className="animated-logo"
            src={loaderLogo}
            alt="Logo du Lisieux Club Futsal"
          />
          {showText && (
            <div className="text-container">
              {textToShow.split("").map((letter, index) => (
                <span key={index} className="animated-letter">
                  {letter}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Loader;
