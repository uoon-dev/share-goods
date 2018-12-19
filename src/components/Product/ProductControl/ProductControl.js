import React from 'react';

import Input from '../../UI/Input/Input';
import Image from '../../UI/Image/Image';
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
      <Image
        placeholderSrc="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-1,h-1:w-270,h-350"
        src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-270,h-350"
        alt="goods" />
      <p><strong>{props.name}</strong></p>
      <Input
        elementType="select"
        changed={setProductOption}
        options={props.options}
        showBasket={true}
      />
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