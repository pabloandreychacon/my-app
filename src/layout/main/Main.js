import React from "react";

import AppHeader from "../header/AppHeader";
import AppFooter from "../footer/AppFooter";
import BackToTopArrow from "../../components/BackToTopArrow";
import { Routes } from "../../routing/Routes";

function Main() {
  return (
    <>
      <AppHeader />
      <main>
        <section id="hero" className="d-flex align-items-center">
          <Routes />
        </section>
      </main>
      <AppFooter />
      <BackToTopArrow />
    </>
  );
}

export default Main;
