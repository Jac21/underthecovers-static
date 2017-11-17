import React, { Component } from 'react';

import CategoryApi from '../../api/CategoryApi';

class SongCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category: CategoryApi.get(props.match.params.number),
      Propy: props
    };
  }

  render() {
    return <div>{this.state.Category.title}</div>;
  }
}

export default SongCategoryList;
