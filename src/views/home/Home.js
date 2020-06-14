import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { Spin } from 'antd';

const Home = (props) => {
  const [state, setState] = useState({
    loading: true
  })

  useEffect(() => {

    const timer = setTimeout(() => {
      /* setState(prevState => {
        return { ...prevState, loading: false }
      }); */
      setState(() => ({
        ...state,
        loading: false,
      }));
    }, 500);
    return () => clearTimeout(timer);

  }, []);

  return (
    <Spin spinning={state.loading}>
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
    </Spin>
  );
};

export default Home;
