import useStyles from '../styles'

import { Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchTitle}>
        <Typography variant='h5'>Ohio Lottery Scratch-Off Tickets</Typography>
      </div>
      <div className={classes.searchBar}>
        <OutlinedInput placeholder="Search Ticket Name or Number" fullWidth endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>} />
      </div>
      <br />
      <div className={classes.searchFilters}>
        <div className={classes.priceFilter}>
          <div>Price</div><br/>
          <div>Checkboxes</div>
        </div>

        <div className={classes.sortBy}>
          <div>Sort By</div><br/>
          <div>Ticket Name (A-Z)</div>
        </div>
      </div>
    </div>
  );
}

export default Search;
