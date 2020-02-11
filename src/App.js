import React, { Component } from 'react';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div> <hr />
        <Link to="/home">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/project">Project</Link> | 
        <Link to="/contact">Contact</Link> <hr />

        <p><Main /></p>
      </div>
    )
  }
}

export default App;