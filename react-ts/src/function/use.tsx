import * as React from 'react';
import { FcCount, FCAttr } from './index';

interface State {
  count: number
}
export class UseFun extends React.Component<{}, State>{
  state: State = {
    count: 0
  }
  onAdd = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <FcCount count={count} onAdd={this.onAdd} />
        <FCAttr className={'attr-type'} style={{ color: 'red' }} />
      </div>
    )
  }
}