import { withRouter } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';

import useStyles from '../styles';
import Checkbox from './Checkbox';

function Search(props) {
  const classes = useStyles();

  function handleSearch(e) {
    props.onSearchUpdate(e.target.value);
  }

  function filterPrices(e) {
    var updatedPrices = props.updatedPrices.slice();

    if (updatedPrices.includes(e.target.id)) {
      const index = updatedPrices.indexOf(e.target.id);

      if (index > -1) {
        updatedPrices.splice(index, 1);
      }
    } else {
      updatedPrices.push(e.target.id);
    }

    props.onPricesUpdate(updatedPrices);
  }

  function handleSortBy(e) {
    props.onSortByUpdate(e.target.value);
  }

  function handleView(e) {
    props.onViewUpdate(e.target.value);
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchTitle}>
        <Typography variant="h5">Ohio Lottery Scratch-Off Tickets</Typography>
      </div>

      <div className={classes.searchBar}>
        <OutlinedInput
          value={props.updatedSearch}
          onChange={(e) => handleSearch(e)}
          placeholder="Search Ticket Name or Number"
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon fontSize="medium" />
            </InputAdornment>
          }
        />
      </div>

      <div className={classes.searchFilters}>
        <div className={classes.priceFilter}>
          <div>Filter by price</div>
          <div
            onClick={(e) => filterPrices(e)}
            className={classes.checkboxContainer}
          >
            <Checkbox price={1} />
            <Checkbox price={2} />
            <Checkbox price={3} />
            <Checkbox price={5} />
            <Checkbox price={10} />
            <Checkbox price={20} />
            <Checkbox price={30} />
          </div>
        </div>

        <div
          style={
            props.updatedView === 'grid'
              ? {}
              : { pointerEvents: 'none', opacity: '.50' }
          }
          className={classes.sortBy}
        >
          <div>Sort by</div>
          <Select
            variant="outlined"
            native
            value={props.updatedSort}
            onChange={(e) => handleSortBy(e)}
            autoWidth
            className={classes.sortBar}
          >
            <option value={'nameAsc'}>Game Name (A - Z)</option>
            <option value={'nameDesc'}>Game Name (Z - A)</option>
            <option value={'priceAsc'}>Price: Low to High</option>
            <option value={'priceDesc'}>Price: High to Low</option>
            <option value={'scoreAsc'}>LL Score: Low to High</option>
            <option value={'scoreDesc'}>LL Score: High to Low</option>
          </Select>
        </div>

        <div className={classes.defaultView}>
          <div>Default View</div>
          <Select
            variant="outlined"
            native
            value={props.updatedView}
            onChange={(e) => handleView(e)}
            fullWidth
            className={classes.sortBar}
          >
            <option value={'grid'}>Grid</option>
            <option value={'list'}>List</option>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Search);
