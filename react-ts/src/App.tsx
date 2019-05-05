import * as React from 'react';
import { UseFun } from './function/use';
import ClassComponent from './class/use';
import { ContextUse } from './context/use';
import { FcCountWithState } from './hoc/use';
import { HookComponent } from './hook/use';
import { UseRedux } from './redux/count';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p>use fun</p>
        <UseFun />
        <p>use class</p>
        <ClassComponent />
        <p>use context</p>
        <ContextUse />
        <p>use hoc</p>
        <FcCountWithState />
        <p>use hook</p>
        <HookComponent />
        <p>use redux count</p>
        <UseRedux />
      </div>
    );
  }
}

export default App;
