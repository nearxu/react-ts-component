
import * as React from 'react'

import ModalContext from './modalContext'
import { ModalComponentProps, ModalComponentType } from './type';

let currentkey = 0;

type ModalOwnProps<P> = Pick<P, Exclude<keyof P, keyof ModalComponentProps>>

function gennerateKey() {
  return currentkey++;
}

export default function useModal<P extends ModalComponentProps = any>(
  component: ModalComponentType<P>
) {
  const key = React.useMemo(gennerateKey, [])
  const { mount, unmount, show: showModal, hide: hideModal } = React.useContext(ModalContext)
  const [visible, setVisible] = React.useState(false)

  const refPayload = React.useRef({})

  const show = React.useCallback((payload?: ModalOwnProps<P>) => {
    refPayload.current = payload || {}
    setVisible(true)
  }, [])

  const hide = React.useCallback(() => {
    setVisible(false)
  }, [])

  // componentdidmount
  React.useEffect(() => {
    mount(key, component, hide)
    return () => unmount(key)
  }, [])

  // shouldupdate
  React.useEffect(() => {
    if (visible) {
      showModal(key, refPayload.current)
    } else {
      hideModal(key)
    }
  }, [visible])

  return { visible, show, hide }
}