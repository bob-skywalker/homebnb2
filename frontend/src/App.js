import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import SearchPage from "./components/SearchPage/SearchPage";
import { ListingShow } from "./components/ListingShow/ListingShow";
import Reservation from "./components/Reservation/Reservation";

function App() {
  return (
    <>
      <Route>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/listings/:listingId">
            <ListingShow />
          </Route>

          <Route exact path='/reservation'>
            <Reservation/>
          </Route>

          <Route path="/">
            <Home />
          </Route>


        </Switch>

        <Footer />
      </Route>
    </>
  );
}

export default App;
