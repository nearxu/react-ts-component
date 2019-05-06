import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, Dispatch } from 'redux';
import { FcCount } from '../function/index'
// constans
export const ADD = "ADD";
export const ADDASYNC = "ADDASYNC"

// action creator
export const add = () => ({
  type: ADD
})

// async
export const onAddAsync = (dispatch: Dispatch) => {
  setTimeout(() => dispatch(add()), 2000)
}

const initState = {
  count: 1
}
// reducer
export function reducer(state = initState, action: any) {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 }
    default:
      return state;
  }
}

interface State {
  count: number
}
const mapStateToProps = (state: State) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAdd: () => dispatch(add()),
  onAddAsync: () => onAddAsync(dispatch)
});


// store
const store = createStore(reducer);
console.log(store, 'store')
// use

const UseCount = connect(mapStateToProps, mapDispatchToProps)(FcCount)

console.log(UseCount, 'useCount')
export const UseRedux = () =>
  <Provider store={store}>
    <div>hello provider <UseCount /></div>
  </Provider>




