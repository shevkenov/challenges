import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

//redux-thunk
import thunk from 'redux-thunk';

//redux
import UploadFile from './redux/reducer';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
const rootReducer = combineReducers({
  UploadFile
})

//middleware
const middleware = [thunk];
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnchancers(applyMiddleware(...middleware)))


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

