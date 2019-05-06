import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { todo } from './reducer';
import { toggleTodo } from './actions';

interface TodoProps {
  todos: todo[],
  filter: string;
  toggleTodo: (id: number) => void;
}

// filter todos
const filterReducer = (todos: todo[], filter: string) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.finish);
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.finish);
    default:
      throw new Error('unknow filter')
  }
}

const Todos = ({ todos, filter, toggleTodo }: TodoProps) => {
  const toggle = (id: number) => {
    toggleTodo(id)
  }
  todos = filterReducer(todos, filter);
  if (!todos.length) return <div />
  return (
    <ul>
      {
        todos.map(todo => {
          return (
            <li
              key={todo.id}
              onClick={() => toggle(todo.id)}
              style={{ textDecoration: todo.finish ? 'line-through' : 'none' }}
            >{todo.text}</li>
          )
        })
      }
    </ul>
  )
}

export interface State {
  todos: todo[],
  setFilter: string;
}
const mapStateToProps = (state: State) => ({
  todos: state.todos,
  filter: state.setFilter
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);