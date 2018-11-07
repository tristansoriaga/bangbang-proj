import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import App from "../app";
import HeroProfile from "./HeroProfile/HeroProfile";
import Heroes from "./Heroes/Heroes";
import AddHero from "./AddHero/AddHero";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AddHero} />
      <Route exact path="/heroes" component={Heroes} />
      <Route exact path="/hero/:name" component={HeroProfile} />
    </Switch>
  </BrowserRouter>
);

export default Router;
