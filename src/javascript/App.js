import React from 'react'
import '../stylesheets/App.sass'
import { Route, NavLink, Switch, Prompt } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

const Item = posed.div({
  enter: {
    opacity: 1,
    staggerChildren: 50
  },
  exit: { opacity: 0}
})

const P = posed.p({
  enter: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 }
})

const Index = () => (
  <Item>
    <h2>Home</h2>
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia placeat, repudiandae molestias asperiores eos unde veniam voluptates aliquam blanditiis totam optio omnis excepturi quidem quia ea dolore odio atque. Sunt!</P>
    <P>Ex, hic, atque accusamus voluptas itaque porro omnis voluptatum cum ullam ab molestias similique iure eaque harum ea impedit, eligendi. Ipsa alias expedita quod nulla, animi accusamus quae eaque iste.</P>
    <P>Quaerat expedita magni, pariatur ullam minima? Dolorem nihil, minima modi eos nisi natus, consectetur ipsam debitis iste quisquam atque perspiciatis cumque ab facere doloribus asperiores deserunt reprehenderit ut, voluptate culpa.</P>
  </Item>
)

const About = () => (
  <Item>
    <h2>About</h2>
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia placeat, repudiandae molestias asperiores eos unde veniam voluptates aliquam blanditiis totam optio omnis excepturi quidem quia ea dolore odio atque. Sunt!</P>
    <P>Ex, hic, atque accusamus voluptas itaque porro omnis voluptatum cum ullam ab molestias similique iure eaque harum ea impedit, eligendi. Ipsa alias expedita quod nulla, animi accusamus quae eaque iste.</P>
    <P>Quaerat expedita magni, pariatur ullam minima? Dolorem nihil, minima modi eos nisi natus, consectetur ipsam debitis iste quisquam atque perspiciatis cumque ab facere doloribus asperiores deserunt reprehenderit ut, voluptate culpa.</P>
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia placeat, repudiandae molestias asperiores eos unde veniam voluptates aliquam blanditiis totam optio omnis excepturi quidem quia ea dolore odio atque. Sunt!</P>
    <P>Ex, hic, atque accusamus voluptas itaque porro omnis voluptatum cum ullam ab molestias similique iure eaque harum ea impedit, eligendi. Ipsa alias expedita quod nulla, animi accusamus quae eaque iste.</P>
    <P>Quaerat expedita magni, pariatur ullam minima? Dolorem nihil, minima modi eos nisi natus, consectetur ipsam debitis iste quisquam atque perspiciatis cumque ab facere doloribus asperiores deserunt reprehenderit ut, voluptate culpa.</P>
  </Item>
)

const Portfolio = () => {
  return (
    <React.Fragment>
      <Prompt message="Are you sure you want to leave?" />
      <Item>
        <h2>My Work</h2>
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia placeat, repudiandae molestias asperiores eos unde veniam voluptates aliquam blanditiis totam optio omnis excepturi quidem quia ea dolore odio atque. Sunt!</P>
        <P>Ex, hic, atque accusamus voluptas itaque porro omnis voluptatum cum ullam ab molestias similique iure eaque harum ea impedit, eligendi. Ipsa alias expedita quod nulla, animi accusamus quae eaque iste.</P>
        <P>Quaerat expedita magni, pariatur ullam minima? Dolorem nihil, minima modi eos nisi natus, consectetur ipsam debitis iste quisquam atque perspiciatis cumque ab facere doloribus asperiores deserunt reprehenderit ut, voluptate culpa.</P>
      </Item>
    </React.Fragment>
  )
}

const Blog = () => (
  <Item>
    <h2>Blog</h2>
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia placeat, repudiandae molestias asperiores eos unde veniam voluptates aliquam blanditiis totam optio omnis excepturi quidem quia ea dolore odio atque. Sunt!</P>
    <P>Ex, hic, atque accusamus voluptas itaque porro omnis voluptatum cum ullam ab molestias similique iure eaque harum ea impedit, eligendi. Ipsa alias expedita quod nulla, animi accusamus quae eaque iste.</P>
    <P>Quaerat expedita magni, pariatur ullam minima? Dolorem nihil, minima modi eos nisi natus, consectetur ipsam debitis iste quisquam atque perspiciatis cumque ab facere doloribus asperiores deserunt reprehenderit ut, voluptate culpa.</P>
  </Item>
)

const NotFound = ({ location }) => {
  return (
    <h2>
      {`Woops, page not found for`}
      <code>
        {location.pathname}
      </code>
    </h2>
  )
}

const RouteContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 }
})

const NavItem = posed.li({
  hoverable: true,
  init: { x: 0, border: '0px ridge rgba(170, 50, 220, 0)' },
  hover: { x: 20, borderBottom: 5, borderColor: '#06060606', }
})

function App () {
  return (
    <Route render={({ location }) => (
        <React.Fragment>
          <nav>
            <ul>
              <NavItem>
                <NavLink to='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/about' activeClassName='hurray'>
                  About me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/portfolio' activeClassName='hurray'>
                  My work
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/blog' activeClassName='hurray'>
                  Blog
                </NavLink>
              </NavItem>
            </ul>
          </nav>

          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route path='/' exact component={Index} />
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/blog' component={Blog} />
                <Route component={NotFound} />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </React.Fragment>
      )}
    />
  )
}

export default App
