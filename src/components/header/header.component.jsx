import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

//we use this RC as LOGO synatax here to tell create react app that we want a react component that can render an SVG, rather than its filename.
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options-container">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div classname="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
