import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import ProductList from './containers/ProductList/ProductList';
import { Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            {/* <Route path="/orders" exact component={Orders} /> */}
            <Route path="/" exact component={ProductList} />
          </Switch>
        </Layout>
        {/* <Toolbar /> */}
      </div>
    );
  }
}

export default App;
