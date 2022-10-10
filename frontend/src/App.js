import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import SearchPage from "./components/SearchPage/SearchPage";
import { ListingShow } from "./components/ListingShow/ListingShow";
import Reservation from "./components/Reservation/Reservation";
import SearchAll from "./components/SearchAll/SearchAll";
import Footers from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Route>
        <Header />

        <Switch>
          <Route exact path="/search/:query">
            <SearchPage />
          </Route>

          <Route path="/listings/:listingId">
            <ListingShow />
          </Route>

          <Route exact path='/reservation'>
            <Reservation/>
          </Route>

          <Route path='/search'>
            <SearchAll/>
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

        {/* <Footers/> */}
      </Route>
    </>
  );
}

export default App;
