import React, { Component } from 'react'
import SoundBoard from './SoundBoard'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import library from './library.json'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <header>
            <h1>Sounds from iconic Actors and Characters</h1>
          </header>
          <nav>
            <ul>
              {Object.keys(library).map(key => (
                <li key={key}>
                  <NavLink to={`/${key}`}>{library[key].title}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Route path="/:name" component={SoundBoard} />
        </>
      </Router>
    )
  }
}

export default App
