import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import SECTIONS_DATA from './sections.data';

export default class Directory extends Component {
  constructor() {
    super();
    this.state = { sections: SECTIONS_DATA };
  }
  render() {
    //spreading all the props besides our ID through spreading them into otherSectionProps
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}
