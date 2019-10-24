import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios'
import App from './App';
import {
  NEW_ITEM, 
  REMOVE_ITEM, 
  INITIALIZE_STORE,
  ADD_TODO_SUCCESS
} from '../actions/types'

const reducer = (state = [], action) => {
  let stateCopy = state.slice();
  console.log(action)
  switch (action.type) {
    case INITIALIZE_STORE:
      return action.initialStore
    case ADD_TODO_SUCCESS:
      return action.todos
    case REMOVE_ITEM:
      stateCopy = stateCopy.filter(i => i !== action.itemName);
      break;

    case NEW_ITEM:
      stateCopy.push(action.newItemName);
      break;
  }
  return stateCopy;
};

const store = createStore(reducer);

axios.get('/api/todos')
.then(({data}) => {
  store.dispatch({
    type: INITIALIZE_STORE,
    initialStore: data
  })
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
