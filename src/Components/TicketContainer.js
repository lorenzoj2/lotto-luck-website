import React, {useState, useEffect} from 'react';
import axios from '../axios';
import useStyles from '../styles'

import TicketPreview from './TicketPreview'

function TicketContainer(props)
{
  const classes = useStyles();
  const [data, setData] = useState([])
    
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(process.env.REACT_APP_LOTTO_LUCK_DEV_IP)
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
    case '0':
      data.sort(sortNameAsc);
      break;
    case '1':
      data.sort(sortNameDesc);
      break;
    case '2':
      data.sort(sortPriceAsc);
      break;
    case '3':
      data.sort(sortPriceDesc);
      break;
    default: 
      data.sort(sortNameAsc);
  }


  return(
    <div className={classes.ticketContainer}>
      {data.map(ticket => (
        props.updatedPrices.length > 0 ? 
          props.updatedPrices.includes(ticket.price) &&
          <TicketPreview key={ticket.id} data={ticket}/> 
          :
          <TicketPreview key={ticket.id} data={ticket}/> 
        ))}
    </div>
  )
}

export default TicketContainer;
