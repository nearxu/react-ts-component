import * as React from 'react'
import { TabControll, Props as TabControllProps } from './tabControll'
// import { UnIdControll, Props as UnControllProps } from './unIdControll';

// export type Props = UnControllProps | TabControllProps

// function isSelectId(props: Props) {
//   return (props as TabControllProps).selectId !== undefined
// }

export function Tabs(props: TabControllProps) {
  return <TabControll {...props} />
}