import React, { Component } from 'react';

import axios from '../../axios-styleshare';
import { NotificationManager } from 'react-notifications';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import Title from '../../components/UI/Title/Title';

class Checkout extends Component {
  state = {
    goods: []
  }

  async componentDidMount() {
    await axios.get('/checkout.json')
      .then(res => {
        for (let key in res.data) {
          const product = res.data[key];
          product.key = key;
          product.originPrice = res.data[key].price;
          this.setState(prevState => (
            {
              goods: [...prevState.goods, { ...product }]
            }
          ))
        }
      })
      .catch(err => console.error(err));
  }

  removeGoods = async (item) => {
    NotificationManager.error('장바구니에서 삭제되었습니다.', '삭제');
    this.setState({
      goods: this.state.goods.filter(value => value.key !== item.key)
    });
    await axios.delete(`/checkout/${item.key}.json`)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  updatePrice = (e, item) => {
    const ItemIndex = this.state.goods.findIndex(value => value.key === item.key);
    const goods = [...this.state.goods];
    const amount = e.target.value;
    const originPrice = item.originPrice;
    goods[ItemIndex].price = amount * originPrice;

    this.setState({
      goods
    })
  }


  render() {
    let checkoutSummary;
    console.log(this.props);
    if (this.state.goods.length > 0) {
      checkoutSummary = <CheckoutSummary
        goods={this.state.goods}
        removeGoods={this.removeGoods}
        updatePrice={this.updatePrice} />
    }

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