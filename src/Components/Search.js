import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';

import useStyles from '../styles'
import Checkbox from './Checkbox'

function Search({onPricesUpdate}) {
  const classes = useStyles();

  const [filteredPrices, setFilteredPrices] = useState([]);

  function filterPrices(e){
    if(filteredPrices.includes(e.target.id)){
      const index = filteredPrices.indexOf(e.target.id);
      if(index >- 1) {
        filteredPrices.splice(index, 1);
      }
    }
    else{
      filteredPrices.push(e.target.id)
    }

    setFilteredPrices(filteredPrices.sort())

    var updatedPrices = filteredPrices.slice()

    onPricesUpdate(updatedPrices)
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchTitle}>
        <Typography variant='h5'>Ohio Lottery Scratch-Off Tickets</Typography>
      </div>
      <div className={classes.searchBar}>
        <OutlinedInput placeholder='Search Ticket Name or Number' fullWidth endAdornment={<InputAdornment position='end'><SearchIcon fontSize='default' /></InputAdornment>} />
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
          <div>Sort By</div>
          <Select defaultValue={1} fullWidth inputProps={{classes: {icon: classes.sortIcon,},}} className={classes.sortBar}>
            <option value={1}>Game Name (A-Z)</option>
            <option value={2}>Game Name (Z-A)</option>
            <option value={3}>Price: Low to High</option>
            <option value={4}>Price: High to Low</option>
            <option value={5}>Top Prizes Remaining: Low to High</option>
            <option value={6}>Top Prizes Remaining: High to Low</option>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default Search;
