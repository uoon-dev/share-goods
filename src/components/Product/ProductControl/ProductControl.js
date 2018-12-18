import React from 'react';

import classes from './ProductControl.module.css';
import { MdShopTwo } from "react-icons/md";

const productControl = (props) => (
  <li className={classes.ProductControl} key={props.key}>
    <img src="https://via.placeholder.com/270x350" alt="goods"></img>
    <p><strong>{props.name}</strong></p>
    <select className={classes.Select}>
      <option value="" disabled selected>선택해주세요.</option>
      {props.options.map(option =>
        <option value={option.id}>
          {option.color} {option.size} {option.stock}
        </option>
      )}
    </select>
    <p>{props.provider}</p>
    <div className={classes.ProductFooter}>
      <p>{props.price.toLocaleString()}원
        <span className={classes.ShippingInfo}>
          + 배송료 {props.shipping.price.toLocaleString()}원
        </span>
      </p>
      <MdShopTwo />
    </div>
  </li>
)

export default productControl;