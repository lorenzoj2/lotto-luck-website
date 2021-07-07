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
        <img className={classes.ticketPreviewImage} src={data.data.pic} alt={data.data.name}/>
      </div>
      <div className={classes.ticketPreviewInfo}>
        <span>${data.data.price} </span> 
        <span>{data.data.name} </span> 
        <span>{data.data.time.split(" ")[0]}</span>
      </div>
    </div>
  )
}

export default TicketPreview;

// 
