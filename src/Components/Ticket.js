import { useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react';

import axios from '../axios';
import useStyles from '../styles'

function Ticket(props){
  const classes = useStyles();
  const {id} = useParams();
  const [data, setData] = useState([]);
  const [prizeData, setPrizeData] = useState([]);
  const [oldPrizeData, setOldPrizeData] = useState(false)
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(process.env.REACT_APP_DEV_ID.concat(id))
      setData(request.data)
      setPrizeData(JSON.parse(request.data[0].prize))
      setOldPrizeData(JSON.parse(request.data[1].prize))
      return request;
    }

    fetchData();
  }, [id]);
  
  function tbody(){
    var rows = [];
    if(oldPrizeData){
      let i = 1;
      for(let x in prizeData){
        rows.push(
          <tr key={i}>
            <td className={classes.prizeTableData} style={{width: '10%'}}><b>{getOrdinal(i)}</b></td>
            <td className={classes.prizeTableData} style={{width: '25%',}}>{x}</td>
            <td className={classes.prizeTableData} style={{width: '20%'}}>{prizeData[x]}</td>
            <td className={classes.prizeTableData} style={{width: '25%'}}>-{(parseInt((oldPrizeData[x]).replaceAll(',', '')) - parseInt(prizeData[x].replaceAll(',', ''))).toLocaleString('en-US')}</td>
          </tr>
        );
        i += 1;
      }
    }
      return rows;
  }

  function getOrdinal(n){
    var suffix = ["th", "st", "nd", "rd"];
    var x = n%100;
    return n + (suffix[(x-20)%10] || suffix[x] || suffix[0]);
  }

  function getStripped(unstripped){
    var arr = [];
    for(let x in unstripped){
      arr.push(prizeData[x].replaceAll(',', ''))
    }
    return arr;
  }

  return(
    <div className={classes.ticket}>
      {data.length > 0 ? 
        <>
          <h1 style={{textAlign: 'center',}}>{data[0].name}</h1>
          <div className={classes.ticketInfo}>

            <div className={classes.ticketImageContainer}>
              <img src={`/img/oh_${data[0].price}_${data[0].ticket_number}.jpg`} alt={data[0].name.concat( 'Scratch Off Ticket')} className={classes.ticketImage}/>
            </div>

            <div className={classes.ticketStats}>
              <div className={classes.ticketStatsInner}>

                <div className={classes.ticketStat}>
                  <div className={classes.ticketStat}><b>Game Number:</b> #{data[0].ticket_number}</div>
                </div>

                <div className={classes.ticketStat}>
                  <div className={classes.ticketStat} ><b>Odds:</b> 1 in {data[0].odds}</div>
                </div>

                <div className={classes.ticketStat}>
                  <div className={classes.ticketStat}><b>Total Prizes Remaining:</b> {data[0].total_prizes_rem || 'n/a'}</div>
                </div>

                <div className={classes.ticketStat}>
                  <div className={classes.ticketStat}><b>Lotto Luck Score:</b> {(getStripped(prizeData).reduce((a, b) => parseInt(a) + parseInt(b), 0) / (data[0].price * data[0].odds * 1000)).toFixed(2)}</div>
                </div>

                <div className={classes.ticketStat}>
                  <div className={classes.ticketStat}><b>Last Updated:</b> {data[0].time.split(' ')[0]}</div>
                </div>
              </div>
            </div>
          </div>

        {/* Table containing current prizes and tickets remaining */}
        <div className={classes.ticketPrizeInfo}>
            <table className={classes.prizeTable}>
              <thead className={classes.prizeTableHeader}>
                <tr>
                  <th className={classes.prizeTableData}>Prize Level</th>
                  <th className={classes.prizeTableData}>Prize Amount</th>
                  <th className={classes.prizeTableData}>Prizes Remaining</th>
                  <th className={classes.prizeTableData}>Sold Since Last Scan</th>
                </tr>
              </thead>
              <tbody className={classes.prizeTableBody}>
              {tbody()}
              </tbody>
            </table>
          </div>
        </>
        :
        <div/>
      }
    </div>
  );
}

export default Ticket;