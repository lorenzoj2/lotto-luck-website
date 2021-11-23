import React, {useState} from 'react';
import { withRouter } from "react-router-dom";

import useStyles from '../styles';
import TicketPreview from './TicketPreview';

function TicketContainer(props){
  const classes = useStyles();
  const [displaySize, setDisplaySize] = useState(16);

  const filtered = props.data.filter(ticket => ticket.name.toUpperCase().includes(props.updatedSearch.toUpperCase()) || ticket.ticket_number.startsWith(props.updatedSearch)).filter(ticket => props.updatedPrices.includes(ticket.price));
  const totalLength = filtered.length;
  const sliceLength = filtered.slice(0, displaySize).length;

  // Sort by functions
  function sortNameAsc(a, b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
  }
  function sortNameDesc(a, b){
    if(a.name < b.name) return 1;
    if(a.name > b.name) return -1;
    return 0;
  }
  function sortPriceAsc(a, b){
    return a.price - b.price;
  }
  function sortPriceDesc(a, b){
    return b.price - a.price;
  }

  switch(props.updatedSortBy){
    case 'nameAsc':
      props.data.sort(sortNameAsc);
      break;
    case 'nameDesc':
      props.data.sort(sortNameDesc);
      break;
    case 'priceAsc':
      props.data.sort(sortPriceAsc);
      break;
    case 'priceDesc':
      props.data.sort(sortPriceDesc);
      break;
    default: 
      props.data.sort(sortNameAsc);
  }
  
  // Load more tickets
  function loadMore(){
    if(displaySize + 16 < totalLength){
      setDisplaySize(displaySize + 16)
    }
    else{
      setDisplaySize(totalLength)
    }
  }

  return(
    <>
    <div className={classes.ticketContainer}>
        {
          filtered.slice(0, displaySize).map(ticket => (
            <TicketPreview key={ticket.ticket_number} data={ticket} view={props.updatedView} prices={props.updatedPrices} sortBy={props.updatedSortBy}/> 
          ))
        }
    </div>

    <div className={classes.loadResults}>
        <div>
          {sliceLength < totalLength ? <button className={classes.loadMore} onClick={() => loadMore()}>Load More</button> : <div/>}
          <br />
          <br />
        </div>
        Displaying {sliceLength} out of {totalLength} results
    </div>
    </>
  )
}

export default withRouter(TicketContainer);
