import * as React from 'react'
import { TabControll, Props } from './tabControll'

export function Tabs(props: Props) {
  if(!props.selectId) return null
  return <TabControll {...props} />
}