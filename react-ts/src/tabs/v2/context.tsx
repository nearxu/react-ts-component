import * as React from 'react'
import { TabId } from './id'

interface Context {
  selectId: TabId,
  setSelectId: (id: TabId) => void
}
export const context = React.createContext<Context>({
  selectId: undefined!,
  setSelectId: () => { }
})
