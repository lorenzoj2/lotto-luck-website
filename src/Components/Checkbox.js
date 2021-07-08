import React, { useState } from 'react';
import useStyles from '../styles'

function Checkbox(price){
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckbox(e) {
    setIsChecked(!isChecked)
  }

  return(
    <div id={price.price} onClick={(e) => handleCheckbox(e)} className={isChecked ? classes.checkboxChecked : classes.checkboxUnchecked}>
      <span id={price.price} className={classes.checkboxLabel}> ${price.price}</span>
    </div>
  );
}

export default Checkbox;
