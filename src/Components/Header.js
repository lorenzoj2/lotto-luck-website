import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

import logo from '../logo.png'
import useStyles from '../styles'

function Header() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.navLogo}>
        <Link to='/'>
          <img className={classes.navLogoImage} src={logo} alt='Logo' />
        </Link>
      </div>
      <div className={classes.navBar}>
        <div className={classes.navBarLink}>
          <Typography variant='h6'>About</Typography>
        </div>
      </div>
    </div>
  );
}

export default Header;


/**
 <div className={classes.navBarLink}>
          <Typography variant='h6'>Winning Tickets</Typography>
        </div>
    
        <div className={classes.navBarLink}>
          <Typography variant='h6'>Random Picker</Typography>
        </div>
 */