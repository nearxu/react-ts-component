import * as React from 'react'

interface Props {
  children: React.ReactNode
}
export function TabList(props: Props) {
  const { children } = props;
  return (
    <ul>{children}</ul>
  )
}