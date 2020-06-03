import React from "react";
//import Carousel from "./components/Carousel/index";
//import Indicators from "./components/Indicators/index";
//import News from "./components/News/index";

const Home = (props) => {
  return (
    <div id="home-view">
      <div
        className="container d-flex flex-column align-items-center"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1>Andrey Chacon Luna</h1>
        <h2>I'm a professional software developer from Costa Rica</h2>
        <a href="about.html" className="btn-about">
          About Me
        </a>
      </div>
    </div>
  );
};

export default Home;
