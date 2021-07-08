import useStyles from '../styles'

function TicketPreview(props){
  const classes = useStyles()

  return(
    <div className={classes.ticketPreview}>
      <div className={classes.ticketPreviewHeader}>
        <span style={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '75%', textAlign: 'left'}}><b>{props.data.name}</b></span>
        <span>#{props.data.number}</span>
      </div>
      <div className={classes.ticketPreviewImageContainer}>
        <img className={classes.ticketPreviewImage} alt={props.data.name}/>
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
    </div>
  )
}

export default TicketPreview;
