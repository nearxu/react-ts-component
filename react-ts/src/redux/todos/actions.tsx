

// constans
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

// action creator
let nextId = 0;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  id: nextId++,
  text
})

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id
})

export const toggleFilter = (type: string) => ({
  type: SET_FILTER,
  filter: type
})