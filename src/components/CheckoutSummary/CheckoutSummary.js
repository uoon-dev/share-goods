import React from 'react';

import { MdDeleteForever } from "react-icons/md";
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  const products = props.goods.map((item, index) => {
    return (
      <div className={classes.CheckoutSummary} key={index}>
        <div className={classes.Col1}>
          <p>상품명: {item.name}</p>
          <p>색깔: {item.productOption.color} / 사이즈: {item.productOption.size}</p>
          <p>가격: {item.price.toLocaleString()}원
              <span className={classes.ShippingInfo}>
              + 배송료 {item.shippingPrice.toLocaleString()}원
              </span>
          </p>
        </div>
        <div className={classes.Col2}>
          <span className={classes.Subtitle}>수량</span>
          <input
            onChange={(e) => props.updatePrice(e, item)}
            className={classes.AmountInput}
            type="number"
            placeholder="수량"
            defaultValue="1"
            min="1"
            max="100">
          </input>
          <MdDeleteForever
            onClick={() => props.removeGoods(item)}
            size="25px" />
        </div>
      </div>
    )
  })

  return (
    <>
      {products}
    </>
  )
}

export default checkoutSummary;