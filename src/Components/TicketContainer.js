import React, {useState, useEffect} from 'react';
import axios from '../axios';

import useStyles from '../styles';
import TicketPreview from './TicketPreview';

function TicketContainer(props)
{
  const classes = useStyles();
  const [data, setData] = useState([])
  const [displaySize, setDisplaySize] = useState(16)
  const totalLength = data.filter(ticket => props.updatedPrices.includes(ticket.price)).length
  const sliceLength = data.filter(ticket => props.updatedPrices.includes(ticket.price)).slice(0, displaySize).length

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(process.env.REACT_APP_DEV)
      setData(request.data)
      return request;
    }
    fetchData();
  }, []);

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

  function loadMore(){
    if(displaySize + 32 < totalLength){
      setDisplaySize(displaySize + 32)
    }
    else{
      setDisplaySize(totalLength)
    }
  }

  return(
    <>
      <div className={classes.ticketContainer}>
        {data.filter(ticket => props.updatedPrices.includes(ticket.price)).slice(0, displaySize).map(ticket => (
            <TicketPreview key={ticket.id} data={ticket}/> 
          ))}
      </div>
      <div style={{textAlign: 'center', paddingBottom: '30px'}}>
        <div>
          {sliceLength < totalLength ?
          <button onClick={() => loadMore()}>Load More</button>
           :
          <div/>
          }
          <br />
          <br />
        </div>
        Displaying {sliceLength} out of {totalLength} results
      </div>
    </>
  )
}

export default TicketContainer;
