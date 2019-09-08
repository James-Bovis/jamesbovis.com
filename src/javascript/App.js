import React from 'react';
import '../stylesheets/App.sass';
import { Route, Link, NavLink, Switch  } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Portfolio() {
  return <h2>My work</h2>;
}

function Blog() {
  return <h2>Console.log</h2>;
}

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

function App() {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="hurray">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="hurray">
              About me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="hurray">
              My work
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="hurray">
              Console.log
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
