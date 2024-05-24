import React from "react";
import "./Home.css";
import Header from "./Header";
import MarqueeComponent from "../Components/Marquee/MarqueeComponent";
import LeftToRight from "../Components/Marquee/LeftToRight";
import LightingText from "../Components/LightingText";
import ProjectCard from "../Components/ProjectCard";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />
      <MarqueeComponent />
      <div className="home-container">
        <LightingText />
        <LeftToRight />
        <div className="text-center h1">Latest Projects</div>
        <div className="center">
          <div className="col-4-2">
            <ProjectCard title="GoBuyGet" imageUrl="Img/Gobuyget.png" link="https://auradigitalstore.onrender.com"  />
            <ProjectCard title="Royal Brand" imageUrl="Img/RoyalBrand.png" link="https://royalbrandfoods.com"  />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Home;
