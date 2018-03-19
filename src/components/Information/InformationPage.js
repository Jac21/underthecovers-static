import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import Information from './Information';
import Home from '../Home/Home';

class InformationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/information" component={Information} />
        <Route path="/information/:string" component={Home} />
      </Switch>
    );
  }
}

InformationPage.propTypes = {};

export default InformationPage;
