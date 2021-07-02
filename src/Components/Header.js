import logo from '../logo.png'

import useStyles from '../styles'
import { Typography } from '@material-ui/core';

function App() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.navLogo}>
        <img className={classes.navLogoImage} src={logo} alt='Logo' />
      </div>

      <div className={classes.navBar}>
        <div className={classes.navBarLink}>
          <Typography variant='h6'>Winning Tickets</Typography>
        </div>
        <div className={classes.navBarLink}>
          <Typography variant='h6'>About</Typography>
        </div>
        <div className={classes.navBarLink}>
          <Typography variant='h6'>Random Picker</Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
