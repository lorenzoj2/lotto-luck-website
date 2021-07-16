import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({  
  // Header
  navLogo: {
    backgroundImage: 'linear-gradient(#660000, #bb0000)',
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
  
  // Home
  home: {
    minHeight: '90vh',
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
    backgroundColor: '#bb0000',
    margin: '12px 12px 0 0',
    color: '#FFFFFF',
    border: 'solid #bb0000',
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
    border: 'solid #bb0000',
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

  // Tickets 
  ticketContainer: {
    margin: '10px 20px 40px 20px',
    textAlign: 'center',
  },

  // ****************************

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
    backgroundImage: 'linear-gradient(#660000, #bb0000)',
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
    margin: '1vh 0 0 2vh',
    textAlign: 'left', 
    whiteSpace: 'nowrap', 
    textOverflow: 'ellipsis', 
    overflow: 'hidden', 
  },

  // ****************************

  loadResults: {
    textAlign: 'center', 
    paddingBottom: '25px',
  },

  loadMore: {
    width: '350px',
    height: '5vh',
    borderRadius: '100px',
    border: 'solid #660000',
    backgroundImage: 'linear-gradient(#bb0000, #660000)',
    color: 'gold',
    fontWeight: '900',
    fontSize: '1em'
  },

  // Footer
  footer: {
    height: '10vh',
    position: 'relative',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundImage: 'linear-gradient(#bb0000, #660000)',
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
}));

export default useStyles;
