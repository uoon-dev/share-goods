import React, { Component } from 'react';

import Alert from 'react-s-alert';
import axios from '../../axios-styleshare';
import ProductControls from '../../components/Product/ProductControls/ProductControls';
import Title from '../../components/UI/Title/Title';
import Spinner from '../../components/UI/Spinner/Spinner';
import EmptyContent from '../../components/EmptyContent/EmptyContent';

class ProductList extends Component {
  state = {
    goods: [],
    loading: true
  }
  async componentDidMount() {
    await axios.get('/goods.json')
      .then(res => this.setState({
        goods: res.data,
        loading: false
      }))
      .catch(err => console.error(err));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.loading || (this.state.goods !== nextState.goods)
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
    if (!this.state.loading) {
      productControls = (this.state.goods.length > 0) ? (
        <ProductControls
          goods={this.state.goods}
          addToBasket={this.addToBasket}></ProductControls>
      ) : <EmptyContent />
    } else {
      productControls = <Spinner />
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