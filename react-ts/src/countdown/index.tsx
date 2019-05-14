import * as React from 'react'
import {
  calcTime,
  formatTimeDelete,
  CountdownTimeDeltaFormatOptions,
  timeDeltaFormatOptionsDefaults,
} from './utils';
interface CountDownProps {
  date: Date | number | string;
  now?: () => number,
  intervalDelay: number,
  autoStart: boolean,
  onStart: () => void,
  onTick: (delte: CountdownTimeDelete) => void,
  children?: React.ReactElement<any>,
  render?: ((props: CountdownTimeDelete) => React.ReactNode),
  zeroPadTime: number;
  zeroPadDays: number;
  daysInHours: boolean
}


export interface CountdownTimeDelete {
  readonly total: number;
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly milliseconds: number;
  readonly completed: boolean;
}

interface State {
  timeDelete: CountdownTimeDelete
}

export default class Countdown extends React.Component<CountDownProps, State>{
  static defaultProps: Partial<CountDownProps> = {
    intervalDelay: 1000,
    autoStart: true
  }
  interval: number | undefined
  constructor(props: CountDownProps) {
    super(props);
    this.state = {
      timeDelete: this.calcTimeDelete()
    }
  }

  componentDidMount() {
    this.props.autoStart && this.start();
  }
  componentWillUnmount() {
    this.clearInterval();
  }

  start() {
    const timeDelete = this.calcTimeDelete();
    this.setTimeDeleteState(timeDelete);
    this.clearInterval();
    this.interval = window.setInterval(() => this.tick(), this.props.intervalDelay)
    // this.props.onStart && this.props.onStart(timeDelete);
  }
  tick() {
    const { onTick } = this.props;
    const delte = this.calcTimeDelete();
    this.setTimeDeleteState({ ...delte });
    if (onTick && delte.total > 0) {
      onTick(delte)
    }
  }
  setTimeDeleteState(date: CountdownTimeDelete) {
    let callback;
    if (!this.state.timeDelete.completed && date.completed) {
      this.clearInterval()
      // callback = () => this.props.
    }
    return this.setState({ timeDelete: date })
  }
  clearInterval(): void {
    window.clearInterval(this.interval);
  }

  calcTimeDelete() {
    const { date } = this.props;
    return calcTime(date)
  }
  getRenderProps() {
    const { timeDelete } = this.state;
    const { daysInHours, zeroPadTime, zeroPadDays } = this.props;
    return {
      ...timeDelete,
      formated: formatTimeDelete(timeDelete, {
        daysInHours,
        zeroPadTime,
        zeroPadDays,
      })
    }
  }
  render() {
    const date = this.getRenderProps();
    const { children, render } = this.props;
    if (render) {
      return render(date)
    }
    if (children && this.state.timeDelete.completed) {
      return React.cloneElement(children, { countdown: date })
    }
    const { days, hours, minutes, seconds } = this.getRenderProps().formated;
    return (
      <div>
        <h1>use countdown</h1>
        <span>{days}: {hours}:{minutes} {seconds}</span>
      </div>
    )
  }
}