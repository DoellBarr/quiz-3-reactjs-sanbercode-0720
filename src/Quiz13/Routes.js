import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./Nav"
import PrivateRoute from "./PrivateRoute"

import Home from "./Home/Home"
import About from "./About/About.js"
import Movie from "./MovieCRUD/Movie.js"
import LoginPage from "./login.js"
import AuthButton from "./AuthButton.js"

const Routes = () =>{
  return (
    <>
    <Router>
      <AuthButton/>
      <Nav/>
        <Switch>
          <Route path = "/home">
            <Home/>
          </Route>

          <Route path = "/about">
            <About/>
          </Route>

          <Route path = "/login">
            <LoginPage/>
          </Route>

          <PrivateRoute path = "/moviecrud">
            <Movie/>
          </PrivateRoute>

        </Switch>
      </Router>
    </>
  );
}

export default Routes
