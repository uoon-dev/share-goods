import React from 'react';

import FormData from '../FormData/FormData';
import classes from './Order.module.css';

const order = (props) => {
  let goods = [];
  for (let products of props.goods) {
    goods.push(products.map((item, index) => {
      return (
        <div className={classes.Order} key={index}>
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
    }))
  }

  return (
    <>
      {goods.map((items, index) => {
        return (
          <div className={classes.OrdersContainer} key={index}>
            <FormData
              userData={props.formData[index]}
              removeOrder={(id) => props.removeOrder(id, index)} />
            {items}
          </div>
        )
      })}
    </>
  )
}

export default order;
