import React from 'react'
import Navbar from './components/Navigation/Nav.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          {/*Agregar mas conforme tu consideres, arreglar el nav  en el  herosection*/}
        </Switch>
      </Router>
    </>
  )
}

export default App
