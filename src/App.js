import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/header/header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/shop/" component={ShopPage} />
        <Route exact path="/contact/" component={ShopPage} />
        <Route exact path="/login/" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
