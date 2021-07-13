import { useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import axios from '../axios';

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
    <div>
      <div>
        <hr/>
        Ticket Info
        <hr/>
        {data.length > 0 ?
        <div>
          <img src={`/img/oh_${data[0].price}_${data[0].number}.jpg`} alt={data[0].name.concat( ' Scratch Off Ticket')} style={{height: '40vh', padding: '4vw'}}/>
          <hr/>
          Name: {data[0].name }
          <hr/>
          Prizes: <br/><br/>{data[0].prize}
          <hr/>
          Last Updated: {data[0].time}
          <hr/>
        </div>
        :
        <div></div>
        }
      </div>
    </div>
  );
}

export default Ticket;