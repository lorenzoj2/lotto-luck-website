import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';

import useStyles from '../styles'
import Checkbox from './Checkbox'

function Search(props) {
  const classes = useStyles();

  const [filteredPrices, setFilteredPrices] = useState([]);
  const [sortByValue, setSortByValue] = useState(0);
  const [search, setSearch] = useState('')
  const [view, setView] = useState('grid')

  function handleSearch(e){
    setSearch(e.target.value)
    var updatedSearch = e.target.value;
    props.onSearchUpdate(updatedSearch)
  }

  function filterPrices(e){
    if(filteredPrices.includes(e.target.id)){
      const index = filteredPrices.indexOf(e.target.id);
      if(index >- 1) {
        filteredPrices.splice(index, 1);
      }
    }
    else{
      filteredPrices.push(e.target.id);
    }

    setFilteredPrices(filteredPrices.sort());
    var updatedPrices = filteredPrices.slice();
    props.onPricesUpdate(updatedPrices);
  }

  function handleSortBy(e){
    setSortByValue(e.target.value);
    var updatedSort = e.target.value;
    props.onSortByUpdate(updatedSort);
  }

  function handleView(e){
    setView(e.target.value)
    props.onViewUpdate(e.target.value)
  }  

  return (
    <div className={classes.search}>
      <div className={classes.searchTitle}>
        <Typography variant='h5'>Ohio Lottery Scratch-Off Tickets</Typography>
      </div>
      <div className={classes.searchBar}>
        <OutlinedInput value={search} onChange={(e) => handleSearch(e)} placeholder='Search Ticket Name or Number' fullWidth endAdornment={<InputAdornment position='end'><SearchIcon fontSize='default' /></InputAdornment>} />
      </div>
      <div />
      <div className={classes.searchFilters}>
        <div className={classes.priceFilter}>
          <div>Filter by price</div>
          <div onClick={(e) => filterPrices(e)} className={classes.checkboxContainer}>
            <Checkbox price={1} />
            <Checkbox price={2} />
            <Checkbox price={3} />
            <Checkbox price={5} />
            <Checkbox price={10} />
            <Checkbox price={20} />
            <Checkbox price={30} />
          </div>
        </div>

        <div className={classes.sortBy}>
          <div>Sort by</div>
          <Select variant='outlined' native value={sortByValue} onChange={(e) => handleSortBy(e)} autoWidth className={classes.sortBar}>
            <option value={'nameAsc'}>Game Name (A - Z)</option>
            <option value={'nameDesc'}>Game Name (Z - A)</option>
            <option value={'priceAsc'}>Price: Low to High</option>
            <option value={'priceDesc'}>Price: High to Low</option>
          </Select>
        </div>

        <div className={classes.defaultView}>
          <div>Default View</div>
          <Select variant='outlined' native value={view} onChange={(e) => handleView(e)} fullWidth className={classes.sortBar}>
            <option value={'grid'}>Grid</option>
            <option value={'list'}>List</option>
          </Select>
        </div>
      </div>

  
    </div>
  );
}

export default Search;
