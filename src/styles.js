import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({  
  // Header
  navLogo: {
    backgroundColor: '#001C43',
    textAlign: 'center',
    height: '100px',
    width: '100%',
  },

  navLogoImage: {
    maxHeight: '100%',
    maxWidth: '100%',
  },

  navBar: {
    backgroundColor: '#C4CED3',
    color: '#001C43',
    width: '100%',
    overflow: 'auto',
    textAlign: 'center',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  },

  navBarLink: {
    display: 'inline-block',
    width: '23%',
    textAlign: 'center',
  },

  // Search 
  search: {
    width: '100%',
    textAlign: 'center',
  },

  searchBar: {
    display: 'inline-block',
    width: '50%',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  },

  searchTitle: {
    paddingTop: '30px',
    paddingBottom: '30px',
    textAlign: 'center',
  },

  searchFilters: {
    paddingTop: '20px',
    display: 'inline-block',
    width: '50%',
  },

  // Checkboxes
  priceFilter: {
    textAlign: 'left',
    float: 'left',
    width: '40%'
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
    backgroundColor: '#001C42',
    margin: '12px 12px 0 0',
    color: '#FFFFFF',
    border: 'solid #001C42',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',

  },

 checkboxUnchecked: {
    float: 'left',
    height: '50px',
    width: '50px',
    position: 'relative',
    cursor: 'pointer',    
    backgroundColor: '#FFFFFF',
    margin: '12px 12px 0 0',
    color: '#001C42',
    border: 'solid #001C42',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',

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
    textAlign: 'left',
    float: 'left',
    width: '30%',
    height: '100%',
  },

  sortBar: {
    height: '60px',
    margin: '12px 8px 0 0',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  },

  defaultView: {
    textAlign: 'left',
    float: 'left',
  },

  // Tickets 
  ticketContainer: {
    marginBottom: '40px',
    textAlign: 'center',
  },

  ticketPreview: {
    display: 'inline-block',
    position: 'relative',
    margin: '40px 20px',
    width: '300px',
    height: '392px',
    borderRadius: '20px 20px 0 0',
    backgroundImage: 'linear-gradient(#001C42, #002774)',
    color: '#FFFFFF',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    cursor: 'pointer',    

    
  },

  ticketPreviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '10%',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginTop: '15px', 
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
    float: 'left',
    height: '300px',
    width: '300px',
    position: 'relative',
  },

  ticketPreviewImage: {
    width: '180px',
    minHeight: '200px',
    maxHeight: '300px',
    position: 'absolute',
    bottom: '0',
    left: '60px',
    objectFit: 'fill',
    border: 'solid #001C42',
    borderBottom: 'none',
  },

  ticketPreviewInfo: {
    height: '60px',
    width: '270px',
    display: 'flex',
    padding: '20px 15px 0 15px',
    borderRadius: '0 0 20px 20px',
    backgroundColor: '#001C42',
  },

  ticketPreviewPrice: {
    paddingTop: '10px',
    height: '30px',
    width: '40px',
    backgroundColor: '#001C42',
    color: 'gold',
    borderRadius: '100px',
    border: 'solid gold',
    fontWeight: 'bold',
  },

  ticketPreviewTopPrize: {
    paddingLeft: '20px'
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
