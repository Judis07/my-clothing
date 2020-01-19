import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/header/header";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";
import LoginSignupPage from "./Pages/login-and-signup/login-and-signup";
import { auth } from "./Firebase/firebase";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });

      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop/" component={ShopPage} />
          <Route exact path="/contact/" component={ShopPage} />
          <Route exact path="/login/" component={LoginSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
