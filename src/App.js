import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/header/header";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";
import LoginSignupPage from "./Pages/login-and-signup/login-and-signup";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/" component={ShopPage} />
        <Route exact path="/contact/" component={ShopPage} />
        <Route exact path="/login/" component={LoginSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
