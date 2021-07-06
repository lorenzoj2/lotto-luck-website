import useStyles from '../styles'

function TicketPreview(data){
  const classes = useStyles()

  return(
    <div className={classes.ticketPreview}>
      <img src={data.data.pic} alt="Individual Scratch Off"/>
      <div className={classes.ticketPreviewInfo}>
        <p>#{data.data.number} <br/> {data.data.name} <br/> ${data.data.price} <br/> {data.data.date}</p>
      </div>
    </div>
  )
}

export default TicketPreview;