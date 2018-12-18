import React from 'react';

import ProductControl from '../ProductControl/ProductControl';
import classes from './ProductControls.module.css';

const productControls = (props) => (
  <ul className={classes.ProductControls}>
    {props.goods.map((value, key) =>
      <ProductControl
        name={value.name}
        provider={value.provider}
        price={value.price}
        key={value.key}
      />
    )}
  </ul>
)

export default productControls;