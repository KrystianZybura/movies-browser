import React from "react";
import Navigation from "../../common/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PopularPeople from "./PopularPeople";
import MoviePage from "./MoviePage";
import PopularMovies from "./PopularMovies";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const MoviesBrowser = () => (
  <BrowserRouter basename="/movies-browser">
    <Navigation />
    <Switch>
      <Route path="/movies" component={PopularMovies} />
      <Route path="/people" component={PopularPeople} />
      <Route path="/movie/" component={MoviePage} />
      <Route path="/" component={PopularMovies} />
      <Route>
        <Redirect to="/movies" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default MoviesBrowser;
