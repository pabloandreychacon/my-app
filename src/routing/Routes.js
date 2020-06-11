import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../views/home/Home";
import About from "../views/about/About";
import Resume from "../views/resume/Resume";
import Services from "../views/services/Services";
import Portfolio from "../views/portfolio/Portfolio";
import Contact from "../views/contact/Contact";
//import LatestNews from "./views/LatestNews";
import NotFound from "../views/notFound/NotFound";
// *********** Worstation ******************//
//import Workstation from "./views/workstation/Workstation";
//Part Information
//import ManageParts from "./views/workstation/PartInformation/ManageParts";
//import AllowedLocations from "./views/workstation/PartInformation/AllowedLocations";
//import ManageLots from "./views/workstation/PartInformation/ManageLots";

//Area Information

//Other

//import Locations from "./views/workstation/AreaInformation/Locations";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
        <Route exact path="/Services">
          <Services />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    );
  }
}
