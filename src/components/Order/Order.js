import React from 'react';

import classes from './Order.module.css';

const order = (props) => {
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
            className={classes.AmountInput}
            type="text"
            placeholder="수량"
            value={item.amount}
            readOnly>
          </input>
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

export default order;
