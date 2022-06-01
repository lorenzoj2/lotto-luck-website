import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import useStyles from '../styles';
import TicketPreview from './TicketPreview';

function TicketContainer(props) {
  const classes = useStyles();

  const [displaySize, setDisplaySize] = useState(16);
  const filtered = props.data.filter(
    (ticket) =>
      props.updatedPrices.includes(ticket.price) &&
      (ticket.name.toUpperCase().includes(props.updatedSearch.toUpperCase()) ||
        ticket.ticket_number.startsWith(props.updatedSearch))
  );
  const totalLength = filtered.length;
  const sliceLength = filtered.slice(0, displaySize).length;

  // Sort by functions
  function sortNameAsc(a, b) {
    return a.name.localeCompare(b.name);
  }

  function sortNameDesc(a, b) {
    return b.name.localeCompare(a.name);
  }

  function sortPriceAsc(a, b) {
    return a.price - b.price;
  }

  function sortPriceDesc(a, b) {
    return b.price - a.price;
  }

  function sortScoreAsc(a, b) {
    return a.ev_score - b.ev_score;
  }

  function sortScoreDesc(a, b) {
    return b.ev_score - a.ev_score;
  }

  switch (props.updatedSortBy) {
    case 'nameAsc':
      filtered.sort(sortNameAsc);
      break;
    case 'nameDesc':
      filtered.sort(sortNameDesc);
      break;
    case 'priceAsc':
      filtered.sort(sortPriceAsc);
      break;
    case 'priceDesc':
      filtered.sort(sortPriceDesc);
      break;
    case 'scoreAsc':
      filtered.sort(sortScoreAsc);
      break;
    case 'scoreDesc':
      filtered.sort(sortScoreDesc);
      break;
    default:
      filtered.sort(sortNameAsc);
  }

  // Load more tickets
  function loadMore() {
    if (displaySize + 16 <= totalLength) {
      setDisplaySize(displaySize + 16);
    } else {
      setDisplaySize(totalLength);
    }
  }

  return (
    <>
      <div className={classes.ticketContainer}>
        {filtered.slice(0, displaySize).map((ticket) => (
          <TicketPreview
            key={ticket.ticket_number}
            data={ticket}
            view={props.updatedView}
            prices={props.updatedPrices}
            sortBy={props.updatedSortBy}
          />
        ))}
      </div>

      <div className={classes.loadResults}>
        <div>
          {sliceLength < totalLength ? (
            <button className={classes.loadMore} onClick={() => loadMore()}>
              Load More
            </button>
          ) : (
            <div />
          )}
          <br />
          <br />
        </div>
        Displaying {sliceLength} out of {totalLength} results
      </div>
    </>
  );
}

export default withRouter(TicketContainer);
