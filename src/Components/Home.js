import Search from './Search'
import TicketContainer from './TicketContainer'

function Home() {

  console.log(process.env.LOTTO_LUCK_DEV_IP)
  return (
    <div>
      <Search />
      <TicketContainer />
    </div>
  );
}

export default Home;
