import React from 'react';

import ProductControl from '../ProductControl/ProductControl';
import classes from './ProductControls.module.css';

const productControls = (props) => (
  <ul className={classes.ProductControls}>
    {props.goods.map((value) =>
      <ProductControl
        id={value.id}
        key={value.id}
        name={value.name}
        provider={value.provider}
        price={value.price}
        options={value.options}
        shipping={value.shipping}
        addToBasket={(product) => props.addToBasket(product)}
      />
    )}
  </ul>
)

export default productControls;