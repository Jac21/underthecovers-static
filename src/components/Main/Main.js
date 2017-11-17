import React, { Component } from 'react';
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
      </main>
    );
  }
}

export default Main;
