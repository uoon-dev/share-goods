import React, { Component } from 'react';

import { NotificationManager } from 'react-notifications';
import axios from '../../axios-styleshare';
import Order from '../../components/Order/Order';
import Title from '../../components/UI/Title/Title';
class Checkout extends Component {
  state = {
    goods: [],
    formData: []
  }

  async componentDidMount() {
    await axios.get('/orders.json')
      .then(res => {
        for (let key in res.data) {
          const formData = res.data[key].orderData;
          const product = res.data[key].orderData.goods;
          formData.key = key;


          this.setState(prevState => (
            {
              goods: [...prevState.goods, [...product]],
              formData: [...prevState.formData, { ...formData }]
            }
          ))
        }
      })
      .catch(err => console.error(err));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.goods !== nextState.goods
  }

  removeOrder = async (id, index) => {
    NotificationManager.success('장바구니에서 삭제되었습니다.', '삭제');
    console.log(this.state.goods);
    this.setState({
      goods: this.state.goods.filter((_, i) => i !== index)
    });
    console.log(this.state.goods);
    // await axios.delete(`/orders/${id}.json`)
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err));
  }

  render() {
    let order;
    if (this.state.goods.length > 0) {
      console.log(this.state.goods);
      order = <Order
        goods={this.state.goods}
        formData={this.state.formData}
        removeOrder={this.removeOrder} />
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