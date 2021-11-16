import logo from './logo.svg';
import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

import OtherPage from './OtherPage';
import Fib from './Fib'

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
    <div>
      {/* <header className="App-header"> */}
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title"> Fib Calculator </h1>
        <Link to="/">Home</Link>
        <Link to="otherPage">OtherPage</Link>
      </header>
      <div>
          <Route exact path="/" component={Fib}></Route>
          <Route exact path="/otherPage" component={OtherPage}></Route>
      </div>
    </div>
    </Router>
  );
}

export default App;
