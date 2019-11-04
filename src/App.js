import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//As soon as Switch see's a match it will not render any other component after that.
//Header is above the switch so that it always loads no matter what page you are on

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SingInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
