import React, { Component } from 'react';

import axios from '../../axios-styleshare';
import Order from '../../components/Order/Order';
import Title from '../../components/UI/Title/Title';

class Checkout extends Component {
  state = {
    goods: []
  }

  async componentDidMount() {
    await axios.get('/order.json')
      .then(res => {
        for (let key in res.data) {
          const product = res.data[key];
          product.key = key;
          this.setState(prevState => (
            {
              goods: [...prevState.goods, { ...product }]
            }
          ))
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    let order;
    if (this.state.goods.length > 0) {
      order = <Order goods={this.state.goods} />
    }

    return (
      <>
        <Title title="The goods you bought!"></Title>
        {order}
      </>
    )
  }
}

export default Checkout;