import React, { Component } from 'react';

import Alert from 'react-s-alert';
import axios from '../../axios-styleshare';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import Title from '../../components/UI/Title/Title';
import Spinner from '../../components/UI/Spinner/Spinner';
class Checkout extends Component {
  state = {
    goods: [],
    totalPrice: 0,
    loading: false
  }

  async componentDidMount() {
    await axios.get('/checkout.json')
      .then(res => {
        for (let key in res.data) {
          const product = res.data[key];
          product.key = key;
          product.originPrice = res.data[key].price;
          product.amount = 1;
          this.setState(prevState => (
            {
              goods: [...prevState.goods, { ...product }]
            }
          ))
        }
      })
      .catch(err => console.error(err));
    const goods = [...this.state.goods];
    goods.forEach(item => {
      this.setState({
        totalPrice: this.state.totalPrice + item.price + item.shippingPrice
      })
    })
  }

  removeGoods = async (item) => {
    await axios.delete(`/checkout/${item.key}.json`)
      .then(res => {
        Alert.error('장바구니에서 삭제되었습니다.', {
          position: 'top-right',
          effect: 'slide',
          onShow: function () { },
          beep: false,
          timeout: 2000,
          offset: 100
        });
        this.setState(prevState => ({
          goods: this.state.goods.filter(value => value.key !== item.key),
          totalPrice: prevState.totalPrice - item.price - item.shippingPrice
        }));
      })
      .catch(err => console.error(err));
  }

  updatePrice = (e, item) => {
    const ItemIndex = this.state.goods.findIndex(value => value.key === item.key);
    const goods = [...this.state.goods];
    const amount = parseInt(e.target.value);
    const originPrice = item.originPrice;
    goods[ItemIndex] = {
      ...goods[ItemIndex],
      price: amount * originPrice,
      amount
    }
    this.setState({
      goods,
      totalPrice: 0
    })
    goods.forEach(item => {
      this.setState(prevState => ({
        totalPrice: prevState.totalPrice + item.price + item.shippingPrice
      }))
    })
  }


  render() {
    let checkoutSummary;
    checkoutSummary = (!this.state.loading) ? (
      <CheckoutSummary
        goods={this.state.goods}
        removeGoods={this.removeGoods}
        updatePrice={this.updatePrice}
        totalPrice={this.state.totalPrice} />
    ) : <Spinner />

    return (
      <>
        <Title title="We hope your good shopping!"></Title>
        {checkoutSummary}
        <ContactData
          goods={this.state.goods}
          history={this.props.history} />
      </>
    )
  }
}

export default Checkout;