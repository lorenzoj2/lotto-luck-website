import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Ticket from './Components/Ticket';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div style={{'&.after': 'block'}}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/tickets/:id'>
            <Ticket />
          </Route>
          <Route>
            Sorry, this page doesn't exist.
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
