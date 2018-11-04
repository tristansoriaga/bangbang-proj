import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../app";
import HeroProfile from "./heroprofile";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/hero/:name" component={HeroProfile} />
    </Switch>
  </BrowserRouter>
);

export default Router;
