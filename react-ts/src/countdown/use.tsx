import * as React from 'react'
import Down from './down'
import Countdown from './index'

export const UseCount = () => {
  return (
    <div>
      <Down />
      <Countdown date={Date.now() + 1000 * 3600 * 24} />
    </div>
  )
}