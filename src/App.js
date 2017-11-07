import React, { Component } from "react";

import CommonHeader from "./components/Common/Header";
import GenreCard from "./components/Card/GenreCard";

import genreCardPhotoOne from "./assets/daniel.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommonHeader />
        <GenreCard imageSource={genreCardPhotoOne} title="80s" />
        <GenreCard imageSource={genreCardPhotoOne} title="Rock" />
        <GenreCard imageSource={genreCardPhotoOne} title="Indie" />
        <GenreCard imageSource={genreCardPhotoOne} title="Pop" />
      </div>
    );
  }
}

export default App;
