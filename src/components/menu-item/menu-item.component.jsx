import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

//destructuring our title off our props and setting it to the value of title
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

//withRouter is a higher order function that allows us to create a MenuItem function that has access to location, match and history props

//this prevents prop tunneling or prop drilling (passing props through components that dont need them just so child props have access to them)
export default withRouter(MenuItem);
