
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return(
      <div>
      <header>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
            crossorigin="anonymous"></link>
      </header>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>

          <Route exact path='/projects'>
            <Projects />
          </Route>

        </Switch>
      </Router>
      
      
        
        <p>Sean Casey</p>
      </div>
    )
  }
}


export default App;
