import * as React from 'react';
import { id } from './typeId'

interface Context {
  selectId?: id,
  setSelectId: (id: id) => void
}

export const { Consumer, Provider } = React.createContext<Context>({
  selectId: undefined!,
  setSelectId: () => { }
})