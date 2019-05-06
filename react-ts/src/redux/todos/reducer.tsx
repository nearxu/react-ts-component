
import { combineReducers } from 'redux';

import { ADD_TODO, TOGGLE_TODO } from './actions';

export interface todo {
  text: string;
  id: number;
  finish: boolean;
}

export interface Action {
  type?: string;
  text?: string;
  id?: number;
  filter?: string;
}

// reducer
const todos = (state: todo[] = [], action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          finish: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ? { ...todo, finish: !todo.finish } : todo);
    default:
      return state;
  }
}

const setFilter = (state = "SHOW_ALL", action: Action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter
    default:
      return state;
  }
}

export default combineReducers({ todos, setFilter });