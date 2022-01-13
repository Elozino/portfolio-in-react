import React, { useState } from "react";
import BrandLogo from "./logo1.svg";
import "./header.css";
import { FaLightbulb, FaRegLightbulb, FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

function Header() {
  const [click, setClick] = useState(true);
  const [themeIcon, setThemeIcon] = useState(true);
  const handleClick = () => setClick(!click);

  const theme = () => {
    themeIcon
      ? document.body.classList.remove("light")
      : document.body.classList.add("light");
      setThemeIcon(!themeIcon);
  };

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <header>
        <a href="./Home.jsx">
          <img src={BrandLogo} alt="brand-logo" />
        </a>
        <div
          className={click ? "theme active" : "theme"}
          title="Change theme"
          onClick={theme}
        >
          {themeIcon ? <FaRegLightbulb /> : <FaLightbulb />}
        </div>
        <nav className={click ? "header-nav " : "header-nav active"}>
          <ul>
            <li>
              <a href="/">&lt;HOME &#47;&gt;</a>
            </li>
            <li>
              <a href="#about">&lt;ABOUT &#47;&gt;</a>
            </li>
            <li>
              <a href="#project">&lt;PROJECT &#47;&gt;</a>
            </li>
            <li>
              <a href="#contact">&lt;CONTACT &#47;&gt;</a>
            </li>
          </ul>
        </nav>
        <button className="mobile-nav" onClick={handleClick}>
          {click ? <FaBars /> : <FaTimes />}
        </button>
        {/**Edit the icon to use react-icon */}
      </header>
    </IconContext.Provider>
  );
}

export default Header;
