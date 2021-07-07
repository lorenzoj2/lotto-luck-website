import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({  
  // Navbar
  navLogo: {
    backgroundColor: '#002775',
    textAlign: 'center',
    height: '100px',
    width: '100%',
  },

  navLogoImage: {
    maxHeight: '100%',
    maxWidth: '100%',
  },

  navBar: {
    backgroundColor: '#001C43',
    color: '#FFFFFF',
    width: '100%',
    overflow: 'auto',
    textAlign: 'center',
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
    width: '40%',
  },

  searchTitle: {
    paddingTop: '30px',
    paddingBottom: '30px',
    textAlign: 'center',
  },

  searchFilters: {
    paddingTop: '15px',
    display: 'inline-block',
    width: '40%',
  },

  priceFilter: {
    textAlign: 'left',
    float: 'left',
  },

  sortBy: {
    textAlign: 'right',
    float: 'right',
  },

  // Tickets 
  ticketContainer: {
    textAlign: 'center',
    margin: '8px',
  },

  ticketPreview: {
    display: 'inline-block',
    position: 'relative',
    margin: '40px 30px 30px 0',
    width: '300px',
    height: '392px',
    borderRadius: '20px 20px 0 0',
    backgroundImage: 'linear-gradient(#001C42, #002774)',
    color: '#FFFFFF',
  },

  ticketPreviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '10%',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginTop: '15px', 
  },

  ticketPreviewImageContainer: {
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
  },

  ticketPreviewInfo: {
    height: '70px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '0 0 20px 20px',
    backgroundColor: '#001C42',
    verticalAlign: 'middle',
  },
  
}));

export default useStyles;