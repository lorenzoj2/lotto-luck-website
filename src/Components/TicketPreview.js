import useStyles from '../styles'

function TicketPreview(data){
  const classes = useStyles()

  return(
    <div className={classes.ticketPreview}>
      <div className={classes.ticketPreviewHeader}>
        <span style={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '75%', textAlign: 'left'}}><b>{data.data.name}</b></span>
        <span>#{data.data.number}</span>
      </div>
      <div className={classes.ticketPreviewImageContainer}>
        <img className={classes.ticketPreviewImage} alt={data.data.name}/>
      </div>
      <div className={classes.ticketPreviewInfo}>
        <span className={classes.ticketPreviewPrice}>${data.data.price}</span>
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
