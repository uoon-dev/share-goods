import React from 'react';

import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  const products = props.goods.map((item, index) => {
    return (
      <div className={classes.CheckoutSummary} key={index}>
        <p>상품명: {item.name}</p>
        <p>가격: {item.price.toLocaleString()}원
            <span className={classes.ShippingInfo}>
            + 배송료 {item.shippingPrice.toLocaleString()}원
            </span>
        </p>
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