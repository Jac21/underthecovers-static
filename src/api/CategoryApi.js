// A simple data API that will be used to get the data for our components

const CategoryApi = {
  categories: [
    { id: '1', title: 'Oldies' },
    { id: '2', title: 'Eighties Classics' },
    { id: '3', title: 'Nineties Alternative' },
    { id: '4', title: 'Slow Dance' },
    { id: '5', title: 'Modern Alternative' },
    { id: '6', title: 'Latin Rock' },
    { id: '7', title: 'Sing-along' },
    { id: '8', title: 'Tropical' }
  ],
  all: function() {
    return this.categories;
  },
  get: function(id) {
    const isCategory = p => p.id === id;
    return this.categories.find(isCategory);
  }
};

export default CategoryApi;
