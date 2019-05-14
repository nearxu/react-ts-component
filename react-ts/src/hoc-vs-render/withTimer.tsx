import * as React from 'react'

interface Props {
  data: number
}

function Count(props: Props) {
  return (
    <p>count: {props.data}</p>
  )
}

function withCount(Component: React.ComponentType<any>) {
  return class WrappComponent extends React.Component<{}, { data: number }>{
    timerId: any
    state = {
      data: 0
    }
    componentDidMount() {
      this.produceData();
    }

    componentWillUnmount() {
      clearTimeout(this.timerId);
    }

    produceData = () => {
      const data = Math.floor(100 * Math.random());

      this.setState({ data }, () => {
        this.timerId = setTimeout(this.produceData, 1000);
      });
    };
    render() {
      const { data } = this.state;
      return (
        <div>
          <h1> withcount data:{data}</h1>
          <Component data={data} />
        </div>
      )
    }
  }
}

const WithComponent = withCount(Count)

export default WithComponent