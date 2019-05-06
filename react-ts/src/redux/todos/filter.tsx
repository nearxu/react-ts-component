import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { State } from './list';
import { toggleFilter } from './actions';

interface SetFilter {
  toggleFilter: (type: string) => void
}
const FilterFoot = ({ toggleFilter }: SetFilter) => {
  const handleFilter = (type: string) => {
    toggleFilter(type)
  }
  return (
    <div>
      <button onClick={() => handleFilter('SHOW_ALL')}>show all</button>
      <button onClick={() => handleFilter('SHOW_COMPLETED')}>show completed</button>
      <button onClick={() => handleFilter('SHOW_ACTIVE')}>show active</button>
    </div>
  )
}

// const mapStateToProps = (state:State) => ({
//   filter:state.setFilter
// })

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleFilter: (type: string) => dispatch(toggleFilter(type))
})

export default connect(null, mapDispatchToProps)(FilterFoot)