import React from "react";
//import Carousel from "./components/Carousel/index";
//import Indicators from "./components/Indicators/index";
//import News from "./components/News/index";
import { Link, NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container d-flex flex-column align-items-center"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1>Andrey Chacon Luna</h1>
        <h2>I'm a software developer from Costa Rica</h2>
        <NavLink to="/About" className="btn-about">
          About Me
        </NavLink>
      </div>
    </section>
  );
};

export default Home;
