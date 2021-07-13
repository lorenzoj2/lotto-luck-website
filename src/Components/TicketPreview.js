import useStyles from '../styles'
import { Link } from "react-router-dom";

function TicketPreview(props){
  const classes = useStyles()
  const imgPath = './img/oh_'.concat(props.data.price,'_', props.data.number, '.jpg')
  
  return(
    <div className={classes.ticketPreview}>
      <Link className={classes.link} to={`/tickets/${props.data.number}`}>
      <div className={classes.ticketPreviewHeader}>
        <span className={classes.ticketPreviewName}>{props.data.name}</span>
        <span>#{props.data.number}</span>
      </div>
      <div className={classes.ticketPreviewImageContainer}>
        <img src={imgPath} className={classes.ticketPreviewImage} alt={props.data.name}/>
      </div>
      <div className={classes.ticketPreviewInfo}>
        <span className={classes.ticketPreviewPrice}>${props.data.price}</span>
        <div>
          <span className={classes.ticketPreviewTopPrize}>Top Prize: $100,000</span> 
          <br/>
          <span className={classes.ticketPreviewTopPrize}>100 top prizes remaining</span> 
          <br/>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default TicketPreview;
