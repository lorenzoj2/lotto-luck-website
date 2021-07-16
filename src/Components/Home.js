import React, { useState } from 'react';

import useStyles from '../styles'
import Search from './Search';
import TicketContainer from './TicketContainer';

function Home() {
  const [search, setSearch] = useState('');
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState(0);
  const [view, setView] = useState('grid');

  const classes = useStyles();

  if(selectedPrices.length <= 0){
    setSelectedPrices(['1', '2', '3', '5', '10', '20', '30'])
  }

  return (
    <div className={classes.home}>    
      <Search onSearchUpdate={setSearch} onPricesUpdate={setSelectedPrices} onSortByUpdate={setSortBy} onViewUpdate={setView}/>
      <TicketContainer updatedPrices={selectedPrices} updatedSortBy={sortBy} updatedSearch={search} updatedView={view}/>
    </div>
  );
}

export default Home;
