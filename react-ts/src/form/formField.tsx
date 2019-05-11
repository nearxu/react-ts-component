import * as React from 'react';

import FormStoreContext from './context';
import { getPropName, getValueFromEvent } from './utils';
import useFieldChange from './useFieldChange';
interface Props {
  name: string,
  label?: string;
  children?: React.ReactNode,
  valueProp?: string | ((type: any) => string),
  valueGetter?: (...args: any[]) => any
}

export default function FormField(props: Props) {

  let { label, children, valueProp = 'value', name, valueGetter = getValueFromEvent } = props;

  const store = React.useContext(FormStoreContext);

  const [value, setValue] = React.useState(name && store ? store.get(name) : undefined)

  const [error, setError] = React.useState(name && store ? store.error(name) : undefined)
  const onChange = React.useCallback(
    (...args) => name && store && store.set(name, valueGetter(...args)),
    [name, store, valueGetter]
  )

  useFieldChange(store, name, () => {
    setValue(store!.get(name!))
    setError(store!.error(name!))
  })

  let child: any = children;
  if (name && store && React.isValidElement(child)) {
    // valueProp = value;
    const prop = getPropName(valueProp, child && child.type)
    const childrenProps = { [prop]: value, onChange }
    child = React.cloneElement(child, childrenProps)
  }

  return (
    <div>
      {label !== undefined && (
        <div>{label}</div>
      )}
      <div>
        <div>{child}</div>
        {error && <div>{error}</div>}
      </div>
    </div>
  )
}