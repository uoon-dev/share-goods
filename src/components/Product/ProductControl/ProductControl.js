import React from 'react';

import classes from './ProductControl.module.css';

const productControl = (props) => (
  <li className={classes.ProductControl} key={props.key}>
    <img src="https://via.placeholder.com/270x350" alt="goods"></img>
    <p><strong>{props.name}</strong></p>
    <select className={classes.Select}>
      {props.options.map(option =>
        <option value={option.id}>
          {option.color} {option.size} {option.stock}
        </option>
      )}
    </select>
    <p>{props.provider}</p>
    <p>{props.price.toLocaleString()}원</p>
  </li>
)

export default productControl;