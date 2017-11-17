// A simple data API that will be used to get the data for our components

const CategoryApi = {
  categories: [
    { id: '1', title: '80s' },
    { id: '2', title: 'Rock' },
    { id: '3', title: 'Indie' },
    { id: '4', title: 'Pop' }
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
