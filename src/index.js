import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';
// import { loadCategories } from './actions/categoriesActions';

import { HashRouter } from 'react-router-dom';

import './styles/styles.css';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

// const store = configureStore();
// store.dispatch(loadCategories());

ReactDOM.render(
  <HashRouter>
    <App loading={false} />
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
