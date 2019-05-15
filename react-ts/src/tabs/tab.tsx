import * as React from 'react'
import { Consumer } from './context'

interface Props{
  id:number|string;
  children:React.ReactNode
}

export function Tab(props:Props) {
  const {id,...reset} = props;
  return (
    <Consumer>
      {
        ({ selectId, setSelectId }) => {
          return (
            <li {...reset}> </li>
          )
        }
      }
    </Consumer>
  )
}