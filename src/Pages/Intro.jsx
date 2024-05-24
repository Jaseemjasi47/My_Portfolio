import React from "react";
import Introduction from "./../Components/Introduction";
import AnimatedProfession from "./../Components/AnimatedProfession";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="intro ">
      <img src="Img/js.png" alt="Your Image" className="js" />
      <img src="Img/me.png" alt="Your Image" className="bg-png" />
      <img src="Img/jsoutline.png" alt="Your Image" className="jsoutline" />

      {/* <VideoBackground/> */}
      <div className="balckshade">
        <Introduction />
        <AnimatedProfession />
      </div>
      <div className="intro_btn-action pb-5">
        <Link to="/portfolio" className="link">
          <div id="button_p" className="ac_btn ">
            MY PORTFOLIO
          </div>
        </Link>
        <Link to="/contact" className="link">
          <div id="button_h" className="ac_btn ">
            CONTACT ME
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
