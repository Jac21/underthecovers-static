import React, { Component } from 'react';

import TracksApi from '../../api/TracksApi';
import SongListItem from '../Song/SongListItem';

class SongCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category: TracksApi.get(props.match.params.string),
      Propy: props
    };
  }

  render() {
    return (
      <div>
        <header>{this.state.Category.setListTheme}</header>
        <SongListItem title={this.state.Category.song} />
      </div>
    );
  }
}

export default SongCategoryList;
