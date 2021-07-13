import React, { useState } from 'react';

import Header from './Header';
import Search from './Search';
import TicketContainer from './TicketContainer';
import Ticket from './Ticket';

import { Switch, Route} from "react-router-dom";

function Home() {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState(0)

  return (
    <div>    
      <Header />
      <Switch>
        <Route exact path='/'>
          <Search onPricesUpdate={setSelectedPrices} onSortByUpdate={setSortBy}/>
          <TicketContainer updatedPrices={selectedPrices} updatedSortBy={sortBy} />
        </Route>
        <Route path='/tickets/:id'>
          <Ticket />
        </Route>
        <Route>
          Sorry, this page doesn't exist.
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
