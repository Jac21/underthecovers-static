import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import Cart from './Cart';
import Home from '../Home/Home';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/cart" component={Cart} />
        <Route path="/category/:string" component={Home} />
      </Switch>
    );
  }
}

CartPage.propTypes = {};

export default CartPage;
