
import React, { Component } from 'react';
import Welcome from './welcome.js'
import Header from './header.js'

class App extends Component {
  render() {
    return (
      <div>
        <div className="site-header">
          <Header></Header>
        </div>
          <Welcome></Welcome>
      </ div>
    );
  }
}

export default App;

