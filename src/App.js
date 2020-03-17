import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.scss";

import GlobalState from "./context/GlobalState";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Products} exact />
          {<Route path="/cart" component={Cart} exact />}
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
