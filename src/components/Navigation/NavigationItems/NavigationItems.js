import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>상품목록</NavigationItem>
    <NavigationItem link="/orders" exact>장바구니</NavigationItem>
  </ul>
)

export default navigationItems;