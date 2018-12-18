import React, { Component } from 'react';
import uuidv4 from 'uuid';
import { NotificationManager } from 'react-notifications';

import axios from '../../axios-order';
import ProductControls from '../../components/Product/ProductControls/ProductControls';
import Title from '../../components/UI/Title/Title';
import classes from './ProductList.module.css';
import 'react-notifications/lib/notifications.css';

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

  addToBasket = (product) => {
    NotificationManager.success('장바구니에 추가되었습니다.', '성공');
    localStorage.setItem(`product-basket-${uuidv4()}`, JSON.stringify(product));
  }

  render() {
    let productControls;
    if (this.state.goods.length > 0) {
      productControls =
        <ProductControls
          goods={this.state.goods}
          addToBasket={this.addToBasket}></ProductControls>
    }
    return (
      <div>
        <Title title="What You Need"></Title>
        {productControls}
      </div>
    )
  }
}

export default ProductList;