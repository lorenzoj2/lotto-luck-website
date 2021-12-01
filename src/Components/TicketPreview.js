import useStyles from '../styles'
import { Link, withRouter} from "react-router-dom";

function TicketPreview(props){
  const classes = useStyles()
  
  return(
    <div className={classes.ticketPreview}>
      <Link className={classes.link} to={{pathname: `/ticket/${props.data.ticket_number}`, state: {
        view: props.view, 
        prices: props.prices.length === 7 ? [] : props.prices,
        sortBy: props.sortBy,
      }}}>

      <div className={classes.ticketPreviewHeader}>
        <span className={classes.ticketPreviewName}>{props.data.name}</span>
        <span>#{props.data.ticket_number}</span>
      </div>
      <div className={classes.ticketPreviewImageContainer}>
        <img src={`/img/oh_${props.data.price}_${props.data.ticket_number}.jpg`} className={classes.ticketPreviewImage} alt={props.data.name.concat(' Scratch Off Ticket Preview')}/>
      </div>

      <div className={classes.ticketPreviewInfo}>
        <span className={classes.ticketPreviewPrice}>${props.data.price}</span>
          <div className={classes.ticketPreviewTopPrize}>
          <b>Top Prize:</b> {Object.keys(JSON.parse(props.data.prize))[0]} 
          <br/>
          <b>Odds of Winning:</b> 1 in {props.data.odds}
          <br/>
          <b>Lotto Luck Score:</b> {props.data.ev_score} / 10
          </div> 
      </div>
      </Link>
    </div>
  );
}

export default withRouter(TicketPreview);
