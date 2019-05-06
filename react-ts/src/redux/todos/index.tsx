import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './reducer';
import TodoList from './list';
import AddTodo from './add';
import FilterLink from './filter';

const store = createStore(
  Reducer,
  window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"]()
);

store.subscribe(() => {
  console.log(store.getState(), 'get store')
})
const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <FilterLink />
    </div>
  )
}

export const TodoApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}