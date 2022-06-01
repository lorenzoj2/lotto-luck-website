import useStyles from '../styles';

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.notFound}>Sorry, the page could not be found.</div>
  );
}

export default NotFound;
