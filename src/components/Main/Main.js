import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import SongCategoryPage from '../SongCategories/SongCategoryPage';
import InformationPage from '../Information/InformationPage';
import CartPage from '../Cart/CartPage';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} comingSoonMode={false} />}
          />
          <Route path="/category" component={SongCategoryPage} />
          <Route path="/information" component={InformationPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
        {this.props.loading && <p>Loading</p>}
      </main>
    );
  }
}

Main.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Main;
