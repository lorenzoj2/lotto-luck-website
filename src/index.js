import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/Home';
import Ticket from './Components/Ticket';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/'>
            <Home view='grid' />
          </Route>
          <Route path='/ticket/:id' component={Ticket} />
          <Route path='*' component={NotFound} />
        </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
