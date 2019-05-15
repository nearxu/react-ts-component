import * as React from 'react'
import { Provider } from './context'

export interface Props {
  onChange?: (nextId: number, preId: number) => void;
  selectId?:number|string;
  children?: React.ReactNode;
  defaultId?:number|string
}

export function TabControll(props: Props) {
  const setSelectId = (id: number) => {
    const { onChange, selectId } = props;
    if(onChange && selectId) {
      onChange(id, selectId)
    }
  }
  const { selectId, children } = props;
  return (
    <Provider value={{ selectId, setSelectId }}>
      {children}
    </Provider>
  )
}