import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Pages/Home';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
