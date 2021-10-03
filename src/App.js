import React from 'react';
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Importing Components
import { Navbar, Footer } from './Components/index';
import { Home, Contact, About, WinterCollection, SummerCollection } from './Pages/index';
import ScrollToTop from './ScrollToTop';
// import ScrollToTop from './ScrollToTop';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/winter-collection" component={WinterCollection} />
        <Route exact path="/summer-collection" component={SummerCollection} />
      </Switch>
      <Footer />
    </Router>
  )
}
