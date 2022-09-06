import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";


function App() {
  return (
    <>
      <Header />
        {/* <Navigation/> */}
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path="/login" >
              <LoginFormPage />
            </Route>
            <Route exact path="/signup">
              <SignupFormPage />
            </Route>
          </Switch>
    </>
  );
}

export default App;
