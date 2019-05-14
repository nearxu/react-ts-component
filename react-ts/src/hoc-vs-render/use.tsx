import * as React from 'react'
import { Consumer } from './rpTimer'
import WithComponent from './withTimer';

export function VsFunction() {
  return (
    <div>
      <Consumer />
      <WithComponent />
    </div>
  )
}