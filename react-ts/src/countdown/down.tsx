import * as React from 'react'

interface Props {
  render: (count: number) => React.ReactNode
}

class Down extends React.Component<Props, { count: number }>{
  timerId: any
  state = {
    count: 9
  }
  componentDidMount() {
    this.renderCount()
  }
  componentWillUnmount() {
    clearTimeout(this.timerId)
  }
  renderCount() {
    const { count } = this.state;
    if (count > 0) {
      this.setState({ count: count - 1 }, () => {
        this.timerId = setTimeout(() => this.renderCount(), 1000)
      })
    } else {
      clearTimeout(this.timerId)
    }
  }
  render() {
    const { count } = this.state
    return this.props.render(count)
  }
}

const DownComponent = () => <Down render={(count) => <p>down :{count}</p>} />
export default DownComponent