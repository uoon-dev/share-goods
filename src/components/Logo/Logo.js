import React from 'react';

import StyleShareLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={StyleShareLogo} alt="StyleShare Logo"></img>
  </div>
)

export default logo;