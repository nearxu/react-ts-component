import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from './actions'

interface Submit {
  submit: (text: string) => void;
}

const AddTodo = ({ submit }: Submit) => {
  const [val, setVal] = React.useState();
  const onSubmit = () => {
    submit(val);
    setVal('')
  }
  return (
    <div>
      <input value={val} onChange={e => setVal(e.target.value)} />
      <button onClick={onSubmit}>add</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submit: (val: string) => dispatch(addTodo(val))
})

export default connect(null, mapDispatchToProps)(AddTodo);
