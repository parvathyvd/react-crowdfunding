import React, { useState } from "react";

const Hero = () => {
  const [show, setShow] = useState(false);
  const onToggleMenu = () => {
    setShow(!show);
  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <nav>
          <ul className="lists">
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
        </nav>
        <div className="mobile-menu">
          {!show ? (
            <img
              src="./images/icon-hamburger.svg"
              alt="hamburger"
              onClick={onToggleMenu}
            />
          ) : (
            <img
              src="./images/icon-close-menu.svg"
              alt="icon close"
              onClick={onToggleMenu}
            />
          )}
          {show && (
            <nav>
              <ul className="lists-mobile">
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;
