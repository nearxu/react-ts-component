
import { CountdownTimeDelete } from './index'

export interface CountdownTimeDeltaFormatOptions {
  readonly daysInHours?: boolean;
  readonly zeroPadTime: number;
  readonly zeroPadDays: number;
}
export const timeDeltaFormatOptionsDefaults: CountdownTimeDeltaFormatOptions = {
  daysInHours: false,
  zeroPadTime: 2,
  zeroPadDays: 2
};

export function formatZero(num: number): string {
  if (num < 10) {
    return '0' + num
  }
  return num.toString()
}
export function formatTimeDelete(delte: CountdownTimeDelete, options?: CountdownTimeDeltaFormatOptions) {
  const { days, hours, minutes, seconds } = delte;
  console.log(days, hours, minutes, seconds, 'seconds');

  // const { daysInHours, zeroPadTime, zeroPadDays } = {
  //   ...timeDeltaFormatOptionsDefaults,
  //   ...options,
  // }
  // const formattedHours = daysInHours
  //   ? zeroPad(hours + days * 24, zeroPadTime)
  //   : zeroPad(hours, Math.min(2, zeroPadTime));

  // return {
  //   days: daysInHours ? '' : zeroPad(days, zeroPadDays),
  //   hours: formattedHours,
  //   minutes: zeroPad(minutes, Math.min(2, zeroPadTime)),
  //   seconds: zeroPad(seconds, Math.min(2, zeroPadTime)),
  // };
  return {
    days,
    hours,
    minutes,
    seconds
  }

}

export function zeroPad(value: number | string, length: number = 2): string {
  const strValue = String(value);
  if (length === 0) return strValue;
  const match = strValue.match(/(.*?)([0-9]+)(.*)/);
  const prefix = match ? match[1] : '';
  const suffix = match ? match[3] : '';
  const strNo = match ? match[2] : strValue;
  const paddedNo = strNo.length >= length ? strNo : ('0'.repeat(length) + strNo).slice(length * -1);
  return `${prefix}${paddedNo}${suffix}`;
}

export function calcTime(date: Date | string | number) {
  let startTime
  if (typeof date === 'string') {
    startTime = new Date(date).getTime()
  } else if (date instanceof Date) {
    startTime = date.getTime();
  } else {
    startTime = date
  }

  // 返回一个数字四舍五入后最接近的整数。
  const total = Math.round(
    parseFloat(
      (Math.max(0, startTime - now()) / 1000).toFixed(
        Math.max(0, Math.min(20, 0))
      )
    ) * 1000
  )

  const seconds = total / 1000;
  return {
    total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor((seconds / 3600) % 24),
    minutes: Math.floor((seconds / 60) % 60),
    seconds: Math.floor((seconds % 60)),
    milliseconds: Number(((seconds % 1) * 1000).toFixed()),
    completed: total <= 0
  }
}

export function now() {
  return Date.now()
}