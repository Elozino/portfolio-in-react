import React from "react";
import "./main.css";
import DisplayPicture from "./zino_logo.png";
import * as Icon from "react-icons/si";

function Main() {
  return (
    <main>
      <div className="main-body">
        <p>
          <span className="greet">Hello 👋🏽</span>
        </p>

        <h2>Welcome to my page where i bring live to aesthetic design</h2>
        <p>
          I am a front-end React and React Native developer who loves building
          custom, responsive UI and digital solutions. A tech enthusiast and a
          Mechanical Engineer. I am open to offers and would love to work on
          products that brings value.
        </p>
        <a
          href="/ElozinoResume.pdf"
          download="Elozino's CV"
        >
          <button className="main-btn">DOWNLOAD CV</button>
        </a>
        <div className="social">
          <a href="https://github.com/elozino">
            <Icon.SiGithub />
          </a>
          <a href="https://twitter.com/iz_zino">
            {" "}
            <Icon.SiTwitter />
          </a>
          <a href="https://www.linkedin.com/in/elozino-ovedhe-42768915b/">
            <Icon.SiLinkedin />
          </a>
          <a href="mailto:ovedhee@gmail.com">
            <Icon.SiGmail />
          </a>
        </div>
      </div>

      <div className="main-image">
        <img src={DisplayPicture} alt="My Portrait" />
      </div>
    </main>
  );
}

export default Main;
