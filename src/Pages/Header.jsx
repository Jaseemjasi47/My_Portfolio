import React, { useEffect } from "react";
import "./Header.css";
import Introduction from "../Components/Introduction";

const Header = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const layers = document.querySelectorAll(".layer");
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (e.pageX - centerX) / centerX;
      const y = (e.pageY - centerY) / centerY;

      layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const translateX = x * speed * 10;
        const translateY = y * speed * 10;
        layer.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed">
      <header className="header">
        <div className="bg-image small-screen-bg">
          {/* <img src="Img/js.png" alt="Your Image" className="bg-image-item" /> */}
          <div></div>
          <img src="Img/me.png" alt="Your Image" className="bg-image-item" />
          <img
            src="Img/jsoutline.png"
            alt="Your Image"
            className="bg-image-item"
          />
        </div>

        <div className="overlay">
          {/* <h1 className="header-title">It's Me Jaseem The FullStack Developer</h1>
                <p className="header-subtitle">Creating Futuristic and responsive websites</p> */}
          <Introduction />
        </div>
        <div className="parallax">
          <div className="layer" data-speed="2"></div>
          <div className="layer" data-speed="4"></div>
          <div className="layer" data-speed="6"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
