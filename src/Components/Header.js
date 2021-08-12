import { Link, withRouter } from "react-router-dom";

import logo from '../logo.png'
import useStyles from '../styles'

function Header(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.navLogo}>
        <Link to={{pathname: '/', state: {view: props.location.state ? props.location.state.view : 'grid'}}}>
          <img className={classes.navLogoImage} src={logo} alt='Logo' />
        </Link>
      </div>
      <div className={classes.navBar}>
        <div className={classes.navBarLink}>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);