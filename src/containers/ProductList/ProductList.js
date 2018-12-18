import React, { Component } from 'react';

import axios from '../../axios-order';
import ProductControls from '../../components/Product/ProductControls/ProductControls';
import classes from './ProductList.module.css';

class ProductList extends Component {
  state = {
    goods: []
  }
  async componentDidMount() {
    await axios.get('/goods.json')
      .then(res => this.setState({ goods: res.data.goods }))
      .catch(err => console.error(err));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.goods !== nextState.goods
  }

  render() {
    let productControls;
    if (this.state.goods.length > 0) {
      productControls = <ProductControls goods={this.state.goods}></ProductControls>
    }
    return (
      <div>
        <h1 className={classes.Title}>What You Need</h1>
        {productControls}
      </div>
    )
  }
}

export default ProductList;