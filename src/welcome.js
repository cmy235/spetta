
import React, { Component } from 'react';
import './welcome.scss';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome-container">
        <div className="greeting-container">
          <div className="text-courses">
            <h1 className="greeting-text">
              welcome to Spetta learn!
            </h1>
            <h4 className="greeting-text">
              please select a course below
            </h4>
            <h4 className="greeting-text">
              courses will appear here!
            </h4>
            
          </div>
          <div className="greeting-courses-list">
          
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
