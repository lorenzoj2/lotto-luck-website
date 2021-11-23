import React, { useState } from 'react';
import { withRouter } from "react-router-dom";

import useStyles from '../styles'

function Checkbox(props){
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(props.location.state && props.location.state.prices.includes(props.price.toString()) ? true : false);

  function handleCheckbox(e) {
    setIsChecked(!isChecked)
  }

  return(
    <div id={props.price} onClick={(e) => handleCheckbox(e)} className={isChecked ? classes.checkboxChecked : classes.checkboxUnchecked}>
      <span id={props.price} className={classes.checkboxLabel}>${props.price}</span>
    </div>
  );
}

export default withRouter(Checkbox);
