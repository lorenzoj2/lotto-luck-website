import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({  
  // Header
  navLogo: {
    backgroundImage: 'linear-gradient(#660000, #8C2323)',
    textAlign: 'center',
    height: '90px',
    width: '100%',
  },

  navLogoImage: {
    maxHeight: '100%',
    maxWidth: '100%',
  },

  navBar: {
    backgroundColor: '#666666',
    width: '100%',
    overflow: 'auto',
    textAlign: 'center',
  },

  navBarLink: {
    display: 'inline-block',
    width: '23%',
    textAlign: 'center',
  },
  
  dataGrid: {
    height: '80vh',
    width: '80%',
    margin: '5vh auto',
  },

  dataGridLink: {
    textDecoration: 'none',
    color: 'black',
  },

  // Search 
  search: {
    width: '100%',
    textAlign: 'center',
  },

  searchBar: {
    display: 'inline-block',
    width: '55%',
    boxShadow: '0 3px 10px rgb(40 0 0 / 0.2)',
    '@media only screen and (max-width: 600px)': {
      width: '80%',
    },
  },

  searchTitle: {
    paddingTop: '30px',
    paddingBottom: '30px',
    textAlign: 'center',
  },

  searchFilters: {
    paddingTop: '20px',
    display: 'inline-block',
    width: '55%',
    '@media only screen and (max-width: 600px)': {
      width: '80%',
    },
  },

  // Checkboxes
  priceFilter: {
    textAlign: 'left',
    float: 'left',
    width: '40%',
    '@media only screen and (max-width: 600px)': {
      width: '100%',
      paddingBottom: '20px'
    },
  },

  checkboxContainer: {
    textAlign: 'center',    
  },

 checkboxChecked: {
    float: 'left',
    height: '50px',
    width: '50px',
    position: 'relative',
    cursor: 'pointer',    
    backgroundColor: '#660000',
    margin: '12px 12px 0 0',
    color: '#FFFFFF',
    border: 'solid #660000',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgb(40 0 0 / 0.2)',

  },

 checkboxUnchecked: {
    float: 'left',
    height: '50px',
    width: '50px',
    position: 'relative',
    cursor: 'pointer',    
    backgroundColor: '#FFFFFF',
    color: 'black',
    margin: '12px 12px 0 0',
    border: 'solid #660000',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgb(40 0 0 / 0.2)',
  },

  checkboxLabel: {
    position: 'absolute',
    bottom: '15px',
    left: 0,
    right: 0,
    fontSize: '1.2em',
    fontWeight: 'bold',
  },

  // Sort By
  sortBy: {
    marginLeft: '1vw',
    textAlign: 'left',
    float: 'left',
    width: '30%',
    height: '100%',
    '@media only screen and (max-width: 600px)': {
      width: '65%',
    },
  },

  sortBar: {
    height: '60px',
    margin: '12px 8px 0 0',
    boxShadow: '0 3px 10px rgb(40 0 0 / 0.2)',
  },

  defaultView: {
    marginLeft: '1vw',
    textAlign: 'left',
    float: 'left',
  },

  // Ticket Preview
  ticketContainer: {
    minHeight: '90vh',
    margin: '10px 20px 40px 20px',
    textAlign: 'center',
  },

  ticketPreview: {
    display: 'inline-block',
    position: 'relative',
    margin: '40px 3vh',
    width: '25%',
    minWidth: '275px',
    maxWidth: '80%',
    height: '3px',
    minHeight: '392px',
    borderRadius: '20px',
    backgroundImage: 'linear-gradient(#660000, #8C2323)',
    color: '#FFFFFF',
    boxShadow: '0 3px 10px rgb(40 0 0 / 0.2)',
    cursor: 'pointer',
  },

  ticketPreviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '10%',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '15px', 
    fontSize: '1.05em',
  },

  ticketPreviewName: {
    whiteSpace: 'nowrap', 
    textOverflow: 'ellipsis', 
    overflow: 'hidden', 
    width: '75%', 
    textAlign: 'left',
    fontWeight: 'bold',
  },

  ticketPreviewImageContainer: {
    height: '70%',
    position: 'relative',
  },

  ticketPreviewImage: {
    width: '55%',
    minHeight: '50%',
    maxHeight: '95%',
    position: 'absolute',
    bottom: '0',
    left: '21.5%',
    objectFit: 'fill',
    border: 'solid #660000',
    borderBottom: 'none',
  },

  ticketPreviewInfo: {
    height: '15%',
    display: 'flex',
    padding: '10px',
    borderRadius: '0 0 20px 20px',
    backgroundColor: '#660000',
  },

  ticketPreviewPrice: {
    marginTop: '5px',
    paddingTop: '10px',
    height: '50%',
    minWidth: '40px',
    color: 'gold',
    borderRadius: '100px',
    border: 'solid gold 2px',
    fontWeight: '750',
  },

  ticketPreviewTopPrize: {
    margin: '0.5vh 0 0 2vh',
    textAlign: 'left', 
    whiteSpace: 'nowrap', 
    textOverflow: 'ellipsis', 
    overflow: 'hidden', 
  },

  loadResults: {
    textAlign: 'center', 
    paddingBottom: '25px',
  },

  loadMore: {
    width: '350px',
    height: '5vh',
    borderRadius: '100px',
    border: 'solid #660000',
    backgroundImage: 'linear-gradient(#660000, #8C2323)',
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: '1em',
    cursor: 'pointer',   
  },

  // Ticket Page
  ticket: {
    width: '100%', 
    height: '100%',
    minHeight: '75vh',
  },

  ticketInfo: {
    margin: '40px auto',
    display: 'flex',
    minHeight: '30vh',
    maxHeight: '60vh',
    textAlign: 'center',
    width: '70%',
    '@media only screen and (max-width: 600px)': {
      flexDirection: 'column',
      width: '100%',
      margin: '5vh 0 15% 0',
    },
  },

  ticketImageContainer: {
    width: '40%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid black',
    backgroundColor: 'grey',
    '@media only screen and (max-width: 600px)': {
      marginBottom: '5vh',
    },
  },

  ticketImage: {
    maxWidth: '90%',
    maxHeight: '90%',
  },

  ticketStats: {
    width: '60%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5vh',
    '@media only screen and (max-width: 600px)': {
      width: '100%',
    },
  },

  ticketStatsInner: {
    width: '80%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '1.2em',
    '@media only screen and (max-width: 600px)': {
      fontSize: '0.8em',
    },
  },

  ticketStat: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  ticketPrizeInfo: {
    textAlign: 'center',
  },

  prizeTable: {
    width: '80%',
    margin: '0 auto',
    backgroundColor: 'lightGrey',
    borderCollapse: 'collapse',
  },

  prizeTableHeader: {
    fontSize: '1.4em',
    backgroundImage: 'linear-gradient(#660000, #8C2323)',
    color: '#FBFAF5',
    '@media only screen and (max-width: 600px)': {
      fontSize: '0.7em',
    },
  },

  prizeTableBody: {
    fontSize: '1.2em',
    '@media only screen and (max-width: 600px)': {
      fontSize: '0.5em',
    },
  },

  prizeTableData: {
    border: 'solid black',
    padding: '10px',
  },

  // Footer
  footer: {
    height: '8vh',
    position: 'relative',
    left: '0',
    bottom: '0',
    right: '0',
    width: '100%',
    backgroundImage: 'linear-gradient(#8C2323, #660000)',
  },

  // Router
  link: {
    textDecoration: 'none',
    color: '#FFFFFF',

    '&.link': {
      color: '#FFFFFF',
    },
    '&.hover': {
      color: 'black',
    },
  },

  // Not Found
  notFound: {
    minHeight: '80vh',
  },
}));

export default useStyles;
