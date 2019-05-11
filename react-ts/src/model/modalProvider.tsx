import * as React from 'react'

import ModalContext from './modalContext'
import { ModalComponentType } from './type'

export interface Props {
  children: React.ReactNode,
  container?: React.ComponentType
}

type ModalData = {
  key: number,
  visible: boolean,
  payload: any,
  component: ModalComponentType<any>,
  onHide: () => void
}

export default function ModalProvider(props: Props) {
  const { children, container: Container = React.Fragment } = props;
  const [modals, setModals] = React.useState<ModalData[]>([]);

  const mount = React.useCallback((key: number, component: ModalComponentType<any>, onHide) => {
    const modal = { key, component, payload: {}, visible: false, onHide };

    // here attention callback
    setModals(oldModals => [...oldModals, modal]);
  }, [])

  const show = React.useCallback((key: number, payload?: any) => {
    setModals(oldModals => {
      return oldModals.map((modal) => modal.key === key ? { ...modal, visible: true, payload } : modal)
    })
  }, [])

  const unmount = React.useCallback((key: number) => {
    setModals((oldModals) => {
      return oldModals.filter(modal => modal.key !== key)
    })
  }, [])

  const hide = React.useCallback((key) => {
    setModals((oldModals) => {
      return oldModals.map(modal => modal.key === key ? { ...modal, visible: false } : modal)
    })
  }, [])

  const context = React.useMemo(() => ({ mount, unmount, show, hide }), [])

  return (
    <ModalContext.Provider value={context}>
      {children}
      <Container>
        {
          modals.map(({ payload, component: Modal, ...reset }, index) => (<Modal key={index} {...payload} {...reset} />))
        }
      </Container>
    </ModalContext.Provider>
  )
}