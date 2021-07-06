import React, {useState, useEffect} from 'react';
import axios from '../axios';
import useStyles from '../styles'

import TicketPreview from './TicketPreview'

function TicketContainer()
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

  return(
    <div className={classes.ticketContainer}>
      {data.map(ticket => (
        <TicketPreview data={ticket}/> 
      ))}
    </div>
  )
}

export default TicketContainer;

