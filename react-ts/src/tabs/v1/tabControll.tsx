import * as React from 'react'
import { Provider } from './context'
import { id } from './typeId'

export interface Props {
  onChange?: (nextId: id, preId: id) => void;
  selectId?: id;
  defaultId?: id;
  children?: React.ReactNode;
}

export function TabControll(props: Props) {
  const setSelectId = (id: id) => {
    const { onChange, selectId } = props;
    if (onChange && selectId) {
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