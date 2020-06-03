import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./assets/scss/Main.scss";
import "./App.scss";

import State from "./context/State";
//import Products from "./views/Products";
//import Cart from "./views/Cart";

import Main from "./layout/main/Main";

function App() {
  return (
    <BrowserRouter>
      <State>
        <Main />
      </State>
    </BrowserRouter>
  );
}

export default App;
