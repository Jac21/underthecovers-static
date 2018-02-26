// A simple data API that will be used to get the data for our components
import tracks from '../data/tracks';

const TracksApi = {
  all: function() {
    return tracks;
  },
  get: function(category) {
    const isCategory = p => p.setListTheme.split(',')[0] === category;
    return tracks.find(isCategory);
  },
  getTracksForCategory: function(category) {
    return tracks.filter(function(track) {
      return (
        track.setListTheme.split(',')[0] === category &&
        track.classInternal !== 'C'
      );
    });
  },
  getDistinctCategories: function() {
    var lookup = {};
    var result = [];

    var items = tracks;

    // eslint-disable-next-line
    for (var item, i = 0; (item = items[i++]); ) {
      var name = item.setListTheme.split(',')[0];

      if (!(name in lookup)) {
        lookup[name] = 1;
        result.push({
          id: i,
          title: name
        });
      }
    }

    return new Promise((resolve, reject) => {
      resolve(Object.assign([], result));
    });
  },
  getDistinctCategoriesOld: function() {
    var lookup = {};
    var result = [];

    var items = tracks;

    // eslint-disable-next-line
    for (var item, i = 0; (item = items[i++]); ) {
      var name = item.setListTheme.split(',')[0];

      if (!(name in lookup)) {
        lookup[name] = 1;
        result.push({
          id: i,
          title: name
        });
      }
    }

    return result;
  }
};

export default TracksApi;
