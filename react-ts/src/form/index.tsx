

import * as React from 'react'
import Form from './form';
import useFormChange from './useFormChange';
import useFormStore from './useFormStore';

export default function App() {
  const store = useFormStore(
    {
      username: 'default',
      password: ''
    },
    {
      username: (val: string) => /\w/ig.test(val),
      password: (val: string) => /\d/g.test(val)
    },
    {
      username: 'name must a-z',
      password: 'password must number'
    }

  )
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
      <Form.FormField name="password" label="Password">
        <input type="password" />
      </Form.FormField>
    </Form>
  )
}