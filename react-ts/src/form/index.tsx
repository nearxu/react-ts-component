

import * as React from 'react'
import Form from './form';
import FormStore from './formStore';
import useFormChange from './useFormChange';

export default function App() {
  const store = new FormStore({ username: 'default' })
  const submit = () => {
    console.log('submit')
  }

  useFormChange(store, (name) => {
    console.log('change', name, store.get(name))
  })

  return (
    <Form store={store}>
      <Form.FormField name="username" label="Username">
        <input type="text" />
      </Form.FormField>
    </Form>
  )
}