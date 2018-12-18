import React, { Component } from 'react';

import { NotificationManager } from 'react-notifications';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import Title from '../../components/UI/Title/Title';

class Checkout extends Component {
  state = {
    goods: []
  }

  componentDidMount() {
    for (let key in localStorage) {
      if (key.match(/^product-basket-/)) {
        const product = JSON.parse(localStorage.getItem(key));
        product.uuid = key;
        this.setState(prevState => (
          {
            goods: [...prevState.goods, { ...product }]
          }
        ))
      }
    }
  }

  removeGoods = (item) => {
    NotificationManager.error('장바구니에서 삭제되었습니다.', '삭제');
    this.setState({
      goods: this.state.goods.filter(value => value.uuid !== item.uuid)
    });
    localStorage.removeItem(item.uuid);
  }

  updatePrice = (e, item) => {
    const ItemIndex = this.state.goods.findIndex(value => value.uuid === item.uuid);
    const goods = [...this.state.goods];
    const amount = e.target.value;
    const originPrice = JSON.parse(localStorage.getItem(item.uuid)).price;
    goods[ItemIndex].price = amount * originPrice;

    this.setState({
      goods
    })
  }


  render() {
    let checkoutSummary;
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
      </>
    )
  }
}

export default Checkout;