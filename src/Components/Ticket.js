import { useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react';

import axios from '../axios';
import CircularProgress from '@material-ui/core/CircularProgress';

function Ticket(){
  const {id} = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(process.env.REACT_APP_DEV_ID.concat(id))
      setData(request.data)
      return request;
    }
    fetchData();
  }, [id]);
  
  return(
    <div style={{width: '100%', minHeight: '80vh'}}>
      <div>
        {data.length > 0 ?
        <div>
         <hr/>
          Ticket Info
          <hr/>
          <img src={`/img/oh_${data[0].price}_${data[0].number}.jpg`} alt={data[0].name.concat( 'Scratch Off Ticket')} style={{maxHeight: '40vh', maxWidth: '60vw', padding: '4vw'}}/>
          <hr/>
          Name: {data[0].name }
          <hr/>
          Prizes: <br/><br/>{data[0].prize}
          <hr/>
          Last Updated: {data[0].time}
          <hr/>
        </div>
        :
        <div style={{textAlign: 'center', margin: '26vh 0'}}>
          <CircularProgress style={{width: '25%', height: '25%'}} color='black'/>
        </div>
        }
      </div>
    </div>
  );
}

export default Ticket;