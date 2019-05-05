import * as React from 'react';

export const AddHook = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>add</button>
      <button onClick={() => setCount(count => count - 1)}>dec</button>
    </div>
  )
}