import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'peachpuff'
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink
          className="navbar-brand"
          exact
          to="/"
          activeStyle={activeStyle}
        >
          Home
        </NavLink>

        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                to="/chips"
                activeStyle={activeStyle}
              >
                Chips <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/sardines"
                activeStyle={activeStyle}
              >
                Sardines
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink
                className="nav-link"
                to="/soda"
                activeStyle={activeStyle}
              >
                Soda
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
