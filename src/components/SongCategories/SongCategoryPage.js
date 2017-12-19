import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import SongCategoryList from './SongCategoryList';

class SongCategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/category" component={Home} />
        <Route path="/category/:string" component={SongCategoryList} />
      </Switch>
    );
  }
}

export default SongCategoryPage;
