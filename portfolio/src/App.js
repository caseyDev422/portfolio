
import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return(
      <div>
      <header>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
            crossorigin="anonymous"></link>
      </header>
        <Header />
        <p>Sean Casey</p>
      </div>
    )
  }
}


export default App;
