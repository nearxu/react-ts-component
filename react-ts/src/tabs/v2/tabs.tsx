import * as React from 'react'
import { context } from './context'
import { TabId } from './id';

interface Props {
  children: React.ReactNode;
  defaultId?: TabId;
  selectId: TabId;
  setSelectId: (id: TabId) => void;
}
export function Tabs(props: Props) {
  const { children, setSelectId, selectId } = props;
  return (
    <context.Provider value={{ setSelectId, selectId }}>{children}</context.Provider>
  )
}