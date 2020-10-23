import React from "react";
import Navbar from "../components/Navbar";

import "../styles/landing.css";
import Logo from "../images/Logo.png";
import ArrowLeft from "../images/ArrowLeft.svg";
import ArrowRight from "../images/ArrowRight.svg";

function Landing() {
  return (
    <div id="landing">
      <Navbar />
      <div id="logo-container">
        <img src={Logo} />
      </div>
      <div id="posts-carrousel-container">
        <img src={ArrowLeft} alt="Seta para esquerda" />
        <div className="post-carrousel">
          <div className="text">
            <h1 className="title">Lorem ipsum dolor sit amet, consectetur. </h1>
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisi
              risus, posuere eget.{" "}
            </h2>
          </div>
        </div>
        <div className="post-carrousel">
          <div className="text">
            <h1 className="title">Lorem ipsum dolor sit amet, consectetur. </h1>
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisi
              risus, posuere eget.{" "}
            </h2>
          </div>
        </div>
        <div className="post-carrousel">
          <div className="text">
            <h1 className="title">Lorem ipsum dolor sit amet, consectetur. </h1>
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisi
              risus, posuere eget.{" "}
            </h2>
          </div>
        </div>

        <img src={ArrowRight} alt="Seta para direita" />
      </div>
    </div>
  );
}

export default Landing;
