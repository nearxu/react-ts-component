import * as React from 'react'

import FormStore from './formStore'

export default function useFieldChange<T>(
  store: FormStore<T> | undefined,
  name: string | undefined,
  onChange: (name: string) => void
) {
  React.useEffect(() => {
    if (!name || !store) return

    return store.subscribe((n) => {
      if (name === '*' || n === name || n === '*') {
        onChange(name)
      }
    })
  }, [name, store])
}
