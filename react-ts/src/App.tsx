import * as React from 'react';
import { FcCount, FCAttr } from './function';
import ClassComponent from './class/use';

class App extends React.Component {
  public state = {
    count: 0,

  }
  public handleAdd = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 })
  }
  public render() {
    const { count } = this.state;
    return (
      <div className="App">
        <FcCount count={count} onAdd={this.handleAdd} />
        <FCAttr className="Hllo-attr" style={{ "color": "red" }}>hello attr</FCAttr>
        <ClassComponent />
      </div>
    );
  }
}

export default App;
