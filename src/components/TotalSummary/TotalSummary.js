import React from 'react';

import classes from './TotalSummary.module.css';

const totalSummary = (props) => (
  <p className={classes.TotalSummary}>
    <strong>합계  {props.totalPrice.toLocaleString()}원</strong>
  </p>
)

export default totalSummary;