import React, { Component } from 'react';

import Alert from 'react-s-alert';
import axios from '../../axios-styleshare';
import ProductControls from '../../components/Product/ProductControls/ProductControls';
import Title from '../../components/UI/Title/Title';
import Spinner from '../../components/UI/Spinner/Spinner';

class ProductList extends Component {
  state = {
    goods: [],
    loading: true
  }
  async componentDidMount() {
    await axios.get('/goods.json')
      .then(res => this.setState({
        goods: res.data,
        loading: true
      }))
      .catch(err => console.error(err));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.goods !== nextState.goods
  }

  addToBasket = async (product) => {
    Alert.success('장바구니에서 추가되었습니다.', {
      position: 'top-right',
      effect: 'slide',
      onShow: function () {
        console.log('aye!')
      },
      beep: false,
      timeout: 2000,
      offset: 100
    });
    await axios.post('/checkout.json', product)
      .then(res => console.log(res))
      .catch(err => console.error)
  }

  render() {
    let productControls;
    productControls = (this.state.loading) ? (
      <ProductControls
        goods={this.state.goods}
        addToBasket={this.addToBasket}></ProductControls>
    ) : <Spinner />

    return (
      <div>
        <Title title="What You Need"></Title>
        {productControls}
      </div>
    )
  }
}

export default ProductList;