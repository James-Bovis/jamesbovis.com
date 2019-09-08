import React from 'react';
import '../stylesheets/App.sass';
import { BrowserRouter as Router, Route, Link, NavLink  } from "react-router-dom";

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

      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog" component={Blog} />
    </React.Fragment>
  );
}

export default App;
