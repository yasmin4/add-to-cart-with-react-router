import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Productdetails from './Productdetails';
import Cart from './Cart';
import Home from './Home';
import Error from './Error';
import Navbar from './Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productdetails/:id" component={Productdetails} />
          <Route path="/cart" component={Cart} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}
