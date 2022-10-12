import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import TrailsPage from "./components/TrialPage/TrailsPage";
// import LoginForm from "./components/LoginFormModal/LoginForm";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/trails">
            <TrailsPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;