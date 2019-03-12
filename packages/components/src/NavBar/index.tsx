import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <React.Fragment>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </React.Fragment>
);

export default NavBar;
