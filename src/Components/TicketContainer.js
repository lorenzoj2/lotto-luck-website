import React, {useState} from 'react';

import useStyles from '../styles';
import TicketPreview from './TicketPreview';


function TicketContainer(props){
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [displaySize, setDisplaySize] = useState(16);

  const totalLength = props.updatedSearch ? 
    props.data.filter(ticket => ticket.name.toUpperCase().includes(props.updatedSearch.toUpperCase()) || ticket.number.startsWith(props.updatedSearch))
    .filter(ticket => props.updatedPrices.includes(ticket.price)).length
    : 
    props.data.filter(ticket => props.updatedPrices.includes(ticket.price)).length
    
  const sliceLength = props.updatedSearch ?
    props.data.filter(ticket => ticket.name.toUpperCase().includes(props.updatedSearch.toUpperCase()) || ticket.number.startsWith(props.updatedSearch))
    .filter(ticket => props.updatedPrices.includes(ticket.price)).slice(0, displaySize).length
    : 
    props.data.filter(ticket => props.updatedPrices.includes(ticket.price)).slice(0, displaySize).length

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
      data.sort(sortNameAsc);
      break;
    case 'nameDesc':
      data.sort(sortNameDesc);
      break;
    case 'priceAsc':
      data.sort(sortPriceAsc);
      break;
    case 'priceDesc':
      data.sort(sortPriceDesc);
      break;
    default: 
      data.sort(sortNameAsc);
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
        {props.updatedSearch ?
          props.data.filter(ticket => ticket.name.toUpperCase().includes(props.updatedSearch.toUpperCase()) || ticket.number.startsWith(props.updatedSearch))
          .filter(ticket => props.updatedPrices.includes(ticket.price)).slice(0, displaySize).map(ticket => (
            <TicketPreview key={ticket.id} data={ticket} view={props.updatedView} /> 
          ))
          :
          props.data.filter(ticket => props.updatedPrices.includes(ticket.price)).slice(0, displaySize).map(ticket => (
            <TicketPreview key={ticket.id} data={ticket} view={props.updatedView}/> 
          ))}
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

export default TicketContainer;
