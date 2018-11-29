import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeroProfile from "./HeroProfile/HeroProfile";
import Heroes from "./Heroes/Heroes";
import AddHero from "./AddHero/AddHero";
import ListHero from "./ListHero/ListHero";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/heroes" component={Heroes} />
      <Route exact path="/hero/:name" component={HeroProfile} />
      <Route exact path="/listhero" component={ListHero} />
      <Route exact path="/addhero" component={AddHero} />
      <Route exact path="/edithero/:id" component={AddHero} />
    </Switch>
  </BrowserRouter>
);

export default Router;
