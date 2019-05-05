import * as React from 'react';
import { AddHook } from './state'
import { Counter } from './reduce'
export const HookComponent = () => {
  return (
    <div>
      <AddHook />
      <Counter />
    </div>
  )
}