import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import "./App.css";

const HatsPage = () => <h1>HATS</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
