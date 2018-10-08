
import React, { Component } from 'react';
import './welcome.scss';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome-container">
        <div className="greeting-container">
          <h2>
            Welcome to Spetta Learn
          </h2>
          <h4>
            Please select a course below
          </h4>
          <div className="greeting-courses-list">
          
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
