import * as React from 'react'
import { Consumer } from './context';

interface Props {
  id: number,
  children: React.ReactNode
}

export function TabPanel(props: Props) {
  const { id, children } = props;
  return (
    <Consumer>
      {
        ({ selectId }) => id !== selectId ? null : (
          <section> {children}</section>
        )
      }
    </Consumer>
  )
}