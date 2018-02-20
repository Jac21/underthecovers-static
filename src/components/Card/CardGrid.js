import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

import { Grid } from 'semantic-ui-react';

import TracksApi from '../../api/TracksApi';
import GenreCard from './GenreCard';

import genreCardPhotoOne from '../../assets/images/daniel.jpg';

const cardGridHeader = css({
  textAlign: 'center'
});

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }

  render() {
    return (
      <div {...cardGridHeader}>
        <h2 className="card-grid-header">Songs</h2>
        <Grid divided doubling stackable columns={this.props.count}>
          <Grid.Row>
            {TracksApi.getDistinctCategoriesOld().map(item => (
              <Grid.Column key={item.id}>
                <GenreCard
                  title={item.title}
                  pageLink={`/category/${item.title}`}
                  imageSource={genreCardPhotoOne}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

CardGrid.propTypes = {
  count: PropTypes.number
};

export default CardGrid;
