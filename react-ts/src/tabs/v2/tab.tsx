import * as React from 'react'

interface Props {
  render: (tabs: any) => React.ReactElement;
  tabs: any
}

export function Tab(props: Props) {
  return (
    <React.Fragment>
      {
        props.tabs.length ?
          props.tabs.map((m: any) => props.render(m))
          :
          null
      }
    </React.Fragment>
  )
}