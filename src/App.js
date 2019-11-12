import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

//As soon as Switch see's a match it will not render any other component after that.
//Header is above the switch so that it always loads no matter what page you are on

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  //set a base value
  unsubscribeFromAuth = null;

  componentDidMount() {
    //method with listener on firebase auth that we can access to take our user information and add it to state whenever someone signs in
    //problem is it will listen forever and could cause memory leaks, to fix this we adjust unsubfromAuth to equal the listener and user when they are active
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    //on unmount we set the listener back to null so it doesnt use up resources
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SingInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
