// A simple data API that will be used to get the data for our components

const TracksApi = {
  tracks: [
    {
      artist: 'Tears for Fears',
      song: 'Shout',
      releaseYear: 1984,
      decade: '80s',
      setListTheme: 'Eighties Classics',
      classInternal: 'C'
    },
    {
      artist: 'The Cars',
      song: 'You Might Think ',
      releaseYear: 1984,
      decade: '80s',
      setListTheme: 'Eighties Classics',
      classInternal: 'B'
    },
    {
      artist: 'George Michael',
      song: 'Faith',
      releaseYear: 1987,
      decade: '80s',
      setListTheme: 'Eighties Classics',
      classInternal: 'A'
    },
    {
      artist: 'INXS',
      song: 'Need You Tonight',
      releaseYear: 1987,
      decade: '80s',
      setListTheme: 'Eighties Classics',
      classInternal: 'A'
    },
    {
      artist: 'Tom Petty',
      song: "Free Fallin'",
      releaseYear: 1989,
      decade: '80s',
      setListTheme: 'Eighties Classics',
      classInternal: 'C'
    },
    {
      artist: 'Violent Femmes',
      song: 'Blister in the Sun',
      releaseYear: 1983,
      decade: '80s',
      setListTheme: 'Eighties Classics, Nineties Alternative, Sing-along',
      classInternal: 'A'
    },
    {
      artist: 'Extreme',
      song: 'More Than Words',
      releaseYear: 1990,
      decade: '80s / 90s',
      setListTheme: 'Eighties Classics, Nineties Alternative, Slow Dance',
      classInternal: 'B'
    },
    {
      artist: 'The Clash',
      song: 'Should I Stay or Should I Go',
      releaseYear: 1982,
      decade: '80s',
      setListTheme: 'Eighties Classics, Sing-along',
      classInternal: 'A'
    },
    {
      artist: 'Cyndi Lauper',
      song: 'Time After Time',
      releaseYear: 1984,
      decade: '80s',
      setListTheme: 'Eighties Classics, Slow Dance',
      classInternal: 'C'
    },
    {
      artist: 'Mana',
      song: 'Oye Mi Amor',
      releaseYear: 1992,
      decade: '90s',
      setListTheme: 'Latin Rock',
      classInternal: 'A'
    },
    {
      artist: 'Los Lonely Boys',
      song: 'Heaven',
      releaseYear: 2003,
      decade: '00s',
      setListTheme: 'Latin Rock',
      classInternal: 'C'
    },
    {
      artist: 'Juanes',
      song: 'Camisa Negra',
      releaseYear: 2004,
      decade: '00s',
      setListTheme: 'Latin Rock',
      classInternal: 'A'
    },
    {
      artist: 'The Strokes',
      song: 'Someday',
      releaseYear: 2001,
      decade: '90s / 00s',
      setListTheme: 'Modern Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Muse',
      song: 'Starlight',
      releaseYear: 2006,
      decade: '00s',
      setListTheme: 'Modern Alternative',
      classInternal: 'A'
    },
    {
      artist: 'MGMT',
      song: 'Time to Pretend',
      releaseYear: 2008,
      decade: '00s',
      setListTheme: 'Modern Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Spoon',
      song: "Don't You Evah",
      releaseYear: 2008,
      decade: '00s',
      setListTheme: 'Modern Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Vampire Weekend',
      song: 'A-Punk',
      releaseYear: 2008,
      decade: '00s',
      setListTheme: 'Modern Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Two Door Cinema Club',
      song: 'What You Know',
      releaseYear: 2010,
      decade: '00s / 10s',
      setListTheme: 'Modern Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Foster the People',
      song: 'Pumped Up Kicks',
      releaseYear: 2011,
      decade: '00s / 10s',
      setListTheme: 'Modern Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Tame Impala',
      song: 'Elephant',
      releaseYear: 2012,
      decade: '10s',
      setListTheme: 'Modern Alternative',
      classInternal: 'A'
    },
    {
      artist: 'The Cure',
      song: 'Lovesong',
      releaseYear: 1989,
      decade: '80s / 90s',
      setListTheme: 'Nineties Alternative',
      classInternal: 'B'
    },
    {
      artist: 'Stone Temple Pilots',
      song: 'Plush',
      releaseYear: 1993,
      decade: '90s',
      setListTheme: 'Nineties Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Stone Temple Pilots',
      song: 'Interstate Love Song',
      releaseYear: 1994,
      decade: '90s',
      setListTheme: 'Nineties Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Weezer',
      song: 'Buddy Holly',
      releaseYear: 1994,
      decade: '90s',
      setListTheme: 'Nineties Alternative',
      classInternal: 'B'
    },
    {
      artist: 'No Doubt',
      song: 'Just A Girl',
      releaseYear: 1995,
      decade: '90s',
      setListTheme: 'Nineties Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Jimmy Eat World',
      song: 'The Middle',
      releaseYear: 2001,
      decade: '90s / 00s',
      setListTheme: 'Nineties Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Fastball',
      song: 'The Way',
      releaseYear: 1998,
      decade: '90s / 00s',
      setListTheme: 'Nineties Alternative, Modern Alternative',
      classInternal: 'B'
    },
    {
      artist: 'Weezer',
      song: 'Say It Ain’t So',
      releaseYear: 1994,
      decade: '90s',
      setListTheme: 'Nineties Alternative, Sing-along',
      classInternal: 'B'
    },
    {
      artist: 'Creedence Clearwater Revival',
      song: 'Down on the Corner',
      releaseYear: 1969,
      decade: '60s',
      setListTheme: 'Oldies',
      classInternal: 'B'
    },
    {
      artist: 'The Beatles',
      song: 'Hey Jude',
      releaseYear: 1968,
      decade: '60s',
      setListTheme: 'Sing-along, Oldies',
      classInternal: 'A'
    },
    {
      artist: 'Bob Marley',
      song: 'Three Little Birds',
      releaseYear: 1977,
      decade: '70s',
      setListTheme: 'Tropical',
      classInternal: 'C'
    },
    {
      artist: 'MAGIC!',
      song: 'Rude',
      releaseYear: 2014,
      decade: '10s',
      setListTheme: 'Tropical',
      classInternal: 'A'
    },
    {
      artist: 'Sublime',
      song: 'Santeria',
      releaseYear: 1997,
      decade: '90s',
      setListTheme: 'Tropical, Nineties Alternative',
      classInternal: 'A'
    },
    {
      artist: 'Sugar Ray',
      song: 'Someday',
      releaseYear: 1999,
      decade: '90s',
      setListTheme: 'Tropical, Nineties Alternative',
      classInternal: 'B'
    },
    {
      artist: 'Weezer',
      song: 'Island in the Sun',
      releaseYear: 2001,
      decade: '90s / 00s',
      setListTheme: 'Tropical, Nineties Alternative',
      classInternal: 'B'
    },
    {
      artist: 'The Surfaris',
      song: 'Wipeout',
      releaseYear: 1963,
      decade: '60s',
      setListTheme: 'Tropical, Oldies',
      classInternal: 'A'
    }
  ],
  all: function() {
    return this.tracks;
  },
  get: function(setListTheme) {
    const isCategory = p => p.setListTheme.split(',')[0] === setListTheme;
    return this.tracks.find(isCategory);
  },
  getDistinctCategories() {
    var lookup = {};
    var result = [];

    var items = this.tracks;

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
