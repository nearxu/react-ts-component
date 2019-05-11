import * as React from 'react'

import FormStore, { FormRules } from './formStore'

export default function useFormStore<T extends Object = any>(
  values: Partial<T> = {},
  rules: FormRules = {},
  errors: any
) {
  return React.useMemo(() => new FormStore(values, rules, errors), [values, rules, errors])
}