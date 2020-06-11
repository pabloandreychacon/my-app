import React from "react";

import AppHeader from "../header/AppHeader";
import AppFooter from "../footer/AppFooter";
import BackToTopArrow from "../../components/BackToTopArrow";
import { Routes } from "../../routing/Routes";

function Main() {
  return (
    <>
      <AppHeader />
      <main id="main">
        <Routes />
      </main>
      <AppFooter />
      <BackToTopArrow />
    </>
  );
}

export default Main;
