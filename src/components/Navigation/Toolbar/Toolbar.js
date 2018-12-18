import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavgationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavgationItems />
    </nav>
  </header>
)

export default toolbar;
