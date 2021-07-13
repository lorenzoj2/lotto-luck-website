import { useParams} from "react-router-dom";

function Ticket(){
  const {id} = useParams()

  console.log(id)

  return(
    <div>
      <div>
        Ticket Info
        <br/>
        {id}
      </div>
    </div>
  );
}

export default Ticket;