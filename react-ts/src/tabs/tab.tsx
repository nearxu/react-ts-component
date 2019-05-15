import * as React from 'react'
import { Consumer } from './context'


export function Tab() {
  return (
    <Consumer>
      {
        ({ selectId, setSelectId }) => {
          return (
            <li>
              hello tab
            </li>
          )
        }
      }
    </Consumer>
  )
}