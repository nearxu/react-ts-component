import * as React from 'react';

const initState = { count: 0 };

interface State {
  count: number;
}

function reducer(state: State, action: any) {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 }
    default:
      return state;
  }
}

export function Counter({ }) {
  const [state, dispatch] = React.useReducer(reducer, initState);
  return (
    <div>
      <p>count:{state.count}</p>
      <button onClick={() => dispatch({ type: 'add' })}>dispatch add</button>
      <button onClick={() => dispatch({ type: 'dec' })}>dispatch dec</button>
    </div>
  )
}