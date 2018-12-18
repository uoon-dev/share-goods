import React, { Component } from 'react';

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
        this.setState(prevState => (
          {
            goods: [...prevState.goods, { ...product }]
          }
        ))
      }
    }
    setTimeout(() => {
      console.log(this.state.goods);
    }, 3999)
  }


  render() {
    let checkoutSummary;
    if (this.state.goods.length > 0) {
      checkoutSummary = <CheckoutSummary goods={this.state.goods} />
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