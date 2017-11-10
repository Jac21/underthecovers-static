import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";

import GenreCard from "./GenreCard";

import genreCardPhotoOne from "../../assets/daniel.jpg";

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <GenreCard imageSource={genreCardPhotoOne} title="80s" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <GenreCard imageSource={genreCardPhotoOne} title="Rock" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <GenreCard imageSource={genreCardPhotoOne} title="Indie" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <GenreCard imageSource={genreCardPhotoOne} title="Pop" />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default CardGrid;
