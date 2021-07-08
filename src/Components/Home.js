import React, { useState } from 'react';

import Search from './Search'
import TicketContainer from './TicketContainer'

function Home() {
  const [selectedPrices, setSelectedPrices] = useState([]);

  const updatedFilteredPrices = (prices) => {
    setSelectedPrices(prices)
  }
  
  return (
    <div>
      <Search onPricesUpdate={updatedFilteredPrices}/>
      <TicketContainer updatedPrices={selectedPrices} />
    </div>
  );
}

export default Home;
