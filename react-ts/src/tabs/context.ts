import * as React from 'react';

interface Context {
  selectId?: number|string,
  setSelectId: (id: number) => void
}

export const { Consumer, Provider } = React.createContext<Context>({
  selectId: undefined!,
  setSelectId: () => { }
})