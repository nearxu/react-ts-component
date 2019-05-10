import * as React from 'react'

import FormStore from './formStore'

export default function useFormChange<T>(
  store: FormStore<T>,
  onChange: (name: string) => void
) {

  React.useEffect(() => {
    if (!store) return;
    return store.subscribe(n => onChange(n))
  }, [store])
}