import React, { Component } from 'react';

import Alert from 'react-s-alert';
import axios from '../../axios-styleshare';
import Order from '../../components/Order/Order';
import Title from '../../components/UI/Title/Title';
class Orders extends Component {
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
    Alert.error('주문목록에서 삭제되었습니다.', {
      position: 'top-right',
      effect: 'slide',
      onShow: function () {
        console.log('aye!')
      },
      beep: false,
      timeout: 2000,
      offset: 100
    });
    this.setState({
      goods: this.state.goods.filter((_, i) => i !== index),
      formData: this.state.formData.filter((_, i) => i !== index)
    });
    // await axios.delete(`/orders/${id}.json`)
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err));
  }

  render() {
    let order;
    if (this.state.goods.length > 0) {
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

export default Orders;