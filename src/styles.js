import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({  
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
  
}));

export default useStyles;