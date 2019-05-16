import * as React from 'react'
import { Consumer } from './context'
import { id } from './typeId';

interface Props {
  id: id;
  children: React.ReactNode
}

export function Tab(props: Props) {
  const { id, ...reset } = props;
  console.log(id, 'tab')
  return (
    <Consumer>
      {
        ({ selectId, setSelectId }) => {
          const handleClick = () => {
            setSelectId(id)
          }
          return (
            <li {...reset} onClick={handleClick} />
          )
        }
      }
    </Consumer>
  )
}