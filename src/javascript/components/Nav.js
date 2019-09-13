import React from 'react';

import { Route, NavLink, Switch  } from "react-router-dom";

const NotFound = ({ location}) => {
  console.log(location)
  return (
    <h2>
      {`Woops, page not found for`}
      <code>
        {location.pathname}
      </code>
    </h2>
  )
}

const Nav = () => (
  <React.Fragment>
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">
            My work
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            Console.log
          </NavLink>
        </li>
      </ul>
    </nav>
  </React.Fragment>
)

export default Nav
