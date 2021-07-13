import React, { useState } from 'react';

import Search from './Search';
import TicketContainer from './TicketContainer';
import useStyles from '../styles'

function Home() {
  const [search, setSearch] = useState('');
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState(0);

  const classes = useStyles();

  if(selectedPrices.length <= 0){
    setSelectedPrices(['1', '2', '3', '5', '10', '20', '30'])
  }

  return (
    <div className={classes.home}>    
      <Search onSearchUpdate={setSearch} onPricesUpdate={setSelectedPrices} onSortByUpdate={setSortBy} />
      <TicketContainer updatedPrices={selectedPrices} updatedSortBy={sortBy} updatedSearch={search}/>
    </div>
  );
}

export default Home;
