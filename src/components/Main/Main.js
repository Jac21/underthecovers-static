import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import SongCategoryPage from '../SongCategories/SongCategoryPage';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={SongCategoryPage} />
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
