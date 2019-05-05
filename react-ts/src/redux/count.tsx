import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { FcCount } from '../function/index'
// constans
export const ADD = "ADD";
export const ADDASYNC = "ADDASYNC"

// action creator
export const add = () => ({
  type: ADD
})

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

const mapStateToProps = (state: any) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch: any) => {
  onAdd: () => dispatch(add())
}

// const State = {
//   count:0,
//   onAdd:() => void
// }

// store
const store = createStore(reducer);
console.log(store, 'store')
// use

const UseCount = connect(mapStateToProps, mapDispatchToProps)(FcCount)

console.log(UseCount, 'useCount')
export const UseRedux = () =>
  <Provider store={store}>
    <div>hello provider </div>
  </Provider>




