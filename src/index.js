import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import { loadCategories } from './actions/categoriesActions';

import { HashRouter } from 'react-router-dom';

import './styles/semantic-ui-css/semantic.min.css';
import './styles/styles.css';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

const store = configureStore();
store.dispatch(loadCategories());

ReactDOM.render(
  <HashRouter>
    <App store={store} />
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
