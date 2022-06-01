import { useParams, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import axios from '../axios';
import useStyles from '../styles';

function Ticket(props) {
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(process.env.REACT_APP_DEV_ID.concat(id));
      setData(request.data);

      // Redirect to 404 if there is no data for the ticket
      if (request.data.length === 0) {
        history.push({ pathname: `/404` });
      }

      return request;
    }

    fetchData();
  }, [id, history]);

  function tbody() {
    let rows = [];

    if (data.length > 0) {
      let current = JSON.parse(data[0].prize);
      let old = 0;

      // if there is more than one day available
      data.length > 1 ? (old = JSON.parse(data[1].prize)) : (old = current);

      let i = 1;

      for (const [key, value] of Object.entries(current)) {
        let currRem = parseInt(value.replaceAll(',', ''));
        let oldRem = parseInt(old[key].replaceAll(',', ''));
        let soldSince = oldRem - currRem;

        rows.push(
          <tr key={i}>
            <td className={classes.prizeTableData} style={{ width: '10%' }}>
              <b>{getOrdinal(i)}</b>
            </td>
            <td className={classes.prizeTableData} style={{ width: '10%' }}>
              {key.replace('$ ', '$')}
            </td>
            <td className={classes.prizeTableData} style={{ width: '10%' }}>
              {value}
            </td>
            <td className={classes.prizeTableData} style={{ width: '10%' }}>
              -{soldSince.toLocaleString('en-US')}
            </td>
          </tr>
        );

        i += 1;
      }
    }

    return rows;
  }

  function getOrdinal(n) {
    let suffix = ['th', 'st', 'nd', 'rd'];
    let x = n % 100;
    return n + (suffix[(x - 20) % 10] || suffix[x] || suffix[0]);
  }

  return (
    <div className={classes.ticket}>
      {data.length > 0 && (
        <>
          <h1 style={{ textAlign: 'center' }}>{data[0].name}</h1>
          <div className={classes.ticketInfo}>
            <div className={classes.ticketImageContainer}>
              <img
                src={`/img/oh_${data[0].price}_${data[0].ticket_number}.jpg`}
                alt={data[0].name.concat('Scratch Off Ticket')}
                className={classes.ticketImage}
              />
            </div>

            <div className={classes.ticketStats}>
              <div className={classes.ticketStatsInner}>
                <div className={classes.ticketStat}>
                  <div className={classes.ticketStat}>
                    <b>Game Number:</b> #{data[0].ticket_number}
                  </div>
                </div>

                <div className={classes.ticketStat}>
                  <div className={classes.ticketStat}>
                    <b>Odds:</b> 1 in {data[0].odds}
                  </div>
                </div>

                <div className={classes.ticketStat}>
                  <div className={classes.ticketStat}>
                    <b>Total Prizes Remaining:</b>{' '}
                    {data[0].total_prizes_rem || 'n/a'}
                  </div>
                </div>

                <div className={classes.ticketStat}>
                  <div className={classes.ticketStat}>
                    <b>Lotto Luck Score:</b>{' '}
                    {data[0].ev_score !== null
                      ? data[0].ev_score + ' / 10'
                      : 'n/a'}
                  </div>
                </div>

                <div className={classes.ticketStat}>
                  <div className={classes.ticketStat}>
                    <b>Last Updated:</b> {data[0].time.split(' ')[0]}
                  </div>
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
                  <th className={classes.prizeTableData}>
                    Sold Since Last Scan
                  </th>
                </tr>
              </thead>
              <tbody className={classes.prizeTableBody}>{tbody()}</tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Ticket;
