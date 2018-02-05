import React, { Component } from 'react';

import CommonHeader from '../Common/CommonHeader';

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
      <div className="song-category-page-wrapper">
        <CommonHeader
          showMenuBar={true}
          headerContentText={this.props.match.params.string}
        />
        <div className="song-list-wrapper">
          {this.state.Category.map(track => (
            <SongListItem
              key={track.song}
              artist={track.artist}
              title={track.song}
              imageSource={genreCardPhotoOne}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SongCategoryList;
