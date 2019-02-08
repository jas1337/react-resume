import React, { Component } from 'react';
import portrait from '../../static/img/portrait.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="row topbar">
        <div className="col-4">
          <img className="portrait" src={portrait} />
        </div>
        <div className="col-8 p-3">
          <h3 className="mt-2">{this.props.data.name}</h3>
          <p className="font-italic">{this.props.data.motto}</p>
        </div>
      </header>
    );
  }
}

export default Header;
