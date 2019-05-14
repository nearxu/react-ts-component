import * as React from 'react'

class Producer extends React.Component<{ render: Function }, { data: number }>{
  timerId: any
  state = {
    data: 0
  }
  componentDidMount() {
    this.producetData()
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  producetData = () => {
    const data = Math.floor(100 * Math.random())
    this.setState({ data }, () => {
      this.timerId = setTimeout(this.producetData, 1000)
    })
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Produced data：{data}</h1>
        {this.props.render(data)}
      </div>
    )
  }
}

export function Consumer() {
  const renderData = (data: number) => <p>consumer data:{data}</p>
  return (
    <Producer render={(data: number) => renderData(data)} />
  )
}