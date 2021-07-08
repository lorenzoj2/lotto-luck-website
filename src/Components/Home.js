import React, { useState } from 'react';

import Search from './Search'
import TicketContainer from './TicketContainer'

function Home() {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState(0)
  
  return (
    <div>
      <Search onPricesUpdate={setSelectedPrices} onSortByUpdate={setSortBy}/>
      <TicketContainer updatedPrices={selectedPrices} updatedSortBy={sortBy} />
    </div>
  );
}

export default Home;
