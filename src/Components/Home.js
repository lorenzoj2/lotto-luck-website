import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from "react-router-dom";
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import axios from '../axios'
import useStyles from '../styles'
import Search from './Search';
import TicketContainer from './TicketContainer';

function Home(props) {
  const history = useHistory();
  const classes = useStyles();

  const [search, setSearch] = useState('');
  const [selectedPrices, setSelectedPrices] = useState(props.location.state ? props.location.state.prices : []);
  const [sortBy, setSortBy] = useState(props.location.state ? props.location.state.sortBy : 'nameAsc');
  const [view, setView] = useState(props.location.state ? props.location.state.view : 'grid');
  const [data, setData] = useState([]);
  
  const columns: GridColDef[] = [
    { field: 'ticket_number', headerName: 'Number', width: 150 },
    { field: 'name', headerName: 'Ticket Name', width: 300},
    { field: 'odds', headerName: 'Odds', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'time', headerName: 'Time', width: 300 },
  ];

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(process.env.REACT_APP_DEV)
      setData(request.data)
      return request;
    }
    fetchData();    
  }, []);

  function getRows(){
    let rows = data.map(({pic, prize, ...row}) => row)

    for(let x in rows){
      for(let y in rows[x]){
        if(y === 'number' || y === 'price'){
          rows[x][y] = parseInt(rows[x][y])
        }
        else if(y === 'odds'){
          rows[x][y] = parseFloat(rows[x][y])
        }
        else if(y === 'time'){
          rows[x][y] = rows[x][y].split(' ')[0]
        }
      }
    }

    return rows
  } 

  function handleRowSelect(e){
    history.push({pathname: `/ticket/${e.row.ticket_number}`, state: {view: view, prices: selectedPrices, sortBy: sortBy}})
  }
  
  return (
    <div className={classes.home}>   
      <Search 
        updatedSearch={search}
        onSearchUpdate={setSearch} 
        updatedPrices={selectedPrices}
        onPricesUpdate={setSelectedPrices} 
        updatedSort={sortBy}
        onSortByUpdate={setSortBy} 
        updatedView={view}
        onViewUpdate={setView} 
      />

      {view === 'list' ? 
      <div className={classes.dataGrid}> 
        <DataGrid 
          getRowId={(row) => row.ticket_number} 
          onCellClick={(e) => handleRowSelect(e)} 
          rows={getRows()} 
          pageSize={25}
          columns={columns} 
        />
      </div>
      :
      <TicketContainer 
        data={data} 
        updatedPrices={selectedPrices.length > 0 ? selectedPrices : ['1', '2', '3', '5', '10', '20', '30']} 
        updatedSortBy={sortBy} 
        updatedSearch={search} 
        updatedView={view} 
      />
      }
    </div>
  );
}

export default withRouter(Home);
