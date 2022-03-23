
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './stylesheet.css';

class App extends Component {
  render() {
    return(
      <div>
      <header>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
            crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
            crossOrigin="anonymous"/>
      </header>
      <Router>
        <Header />
        <Switch>
          <Route  path='/' exact component={About}>
            <About />
          </Route>
        </Switch>
          <Route exact path='/contact' component={Contact}>
            <Contact />
          </Route>

          <Route exact path='/projects' component={Projects}>
            <Projects />
          </Route>
      </Router>
      <Footer />
      </div>
    )
  }
}


export default App;
