import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import ProductList from './containers/ProductList/ProductList';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import { Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/checkout" component={Checkout} />
            {/* <Route path="/orders" component={Orders} /> */}
          </Switch>
        </Layout>
        {/* <Toolbar /> */}
      </div>
    );
  }
}

export default App;
