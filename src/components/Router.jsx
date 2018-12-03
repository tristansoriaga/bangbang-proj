import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HeroProfile from "./HeroProfile/HeroProfile";
import Heroes from "./Heroes/Heroes";
import AddHero from "./AddHero/AddHero";
import ListHero from "./ListHero/ListHero";
import LoginForm from "./LoginForm/LoginForm";

const AuthenticateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (authenticated === true ? <Component {...props} {...rest} /> : <Redirect to="/admin" />)}
    />
  );
};

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Heroes} />
      <Route exact path="/heroes" component={Heroes} />
      <Route exact path="/hero/:name" component={HeroProfile} />
      <Route exact path="/admin" component={LoginForm} />
      <AuthenticateRoute exact path="/admin/listhero" authenticated={true} component={ListHero} />
      <AuthenticateRoute exact path="/admin/addhero" component={AddHero} />
      <AuthenticateRoute exact path="/admin/edithero/:id" component={AddHero} />
    </Switch>
  </BrowserRouter>
);

export default Router;
