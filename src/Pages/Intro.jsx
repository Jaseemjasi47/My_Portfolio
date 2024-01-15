import React from "react";
import Introduction from "./../Components/Introduction";
import AnimatedProfession from "./../Components/AnimatedProfession";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="intro">
      <img src="Img/me.png" alt="Your Image" className="bg-png" />
      {/* <VideoBackground/> */}
      <div className="balckshade">
        <Introduction />
        <AnimatedProfession />
      </div>
      <div className="intro_btn-action pb-5">
        <Link to="/portfolio" className="">
          <div id="button_p" className="ac_btn ">
          <div className="ring four"></div>
            <div className="ring three"></div>
            <div className="ring two"></div>
            <div className="ring one"></div>
            MY PORTFOLIO
          </div>
        </Link>
        <Link to="/contact">
          <div id="button_h" className="ac_btn ">
          <div className="ring four"></div>
            <div className="ring three"></div>
            <div className="ring two"></div>
            <div className="ring one"></div>
            CONTACT ME
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
