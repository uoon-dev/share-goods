import React from 'react';

import classes from './ProductControl.module.css';
import { MdShopTwo } from "react-icons/md";

const productControl = (props) => {
  let productOption = props.options[0];

  const setProductOption = (e) => {
    productOption =
      props.options.find((option) => option.id === parseInt(e.target.value));
  }

  return (
    <li className={classes.ProductControl} key={props.id}>
      <img src="https://picsum.photos/270/350/?random" alt="goods"></img>
      <p><strong>{props.name}</strong></p>
      <select
        className={classes.Select}
        onChange={setProductOption}>
        {props.options.map(option =>
          <option value={option.id} key={option.id}>
            {option.color} {option.size} 재고 : {option.stock}
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
        <MdShopTwo
          onClick={() => props.addToBasket({
            id: props.id,
            productOption: productOption,
            name: props.name,
            price: props.price,
            shippingPrice: props.shipping.price
          })} />
      </div>
    </li>
  )
}

export default productControl;