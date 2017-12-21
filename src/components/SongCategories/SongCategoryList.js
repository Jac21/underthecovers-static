import React, { Component } from 'react';

import TracksApi from '../../api/TracksApi';
import SongListItem from '../Song/SongListItem';

import genreCardPhotoOne from '../../assets/images/daniel.jpg';

class SongCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category: TracksApi.getTracksForCategory(props.match.params.string)
    };
  }

  render() {
    return (
      <div>
        <header>{this.props.match.params.string}</header>
        {this.state.Category.map(song => (
          <SongListItem
            key={song}
            title={song}
            imageSource={genreCardPhotoOne}
          />
        ))}
      </div>
    );
  }
}

export default SongCategoryList;
