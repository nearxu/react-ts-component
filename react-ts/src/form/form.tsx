
import * as React from 'react'
import FormStoreContext from './context';
import FormStore from './formStore';

import FormField from './formField';

interface Props {
  store: FormStore,
  children?: React.ReactNode
}

function Form(props: Props) {
  const { store, children } = props;
  return (
    <FormStoreContext.Provider value={store}>
      <form>
        {children}
      </form>
    </FormStoreContext.Provider>
  )
}

Form.FormField = FormField

export default Form