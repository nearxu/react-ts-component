import * as React from 'react'
import { context } from './context'
import { TabId } from './id'

interface Props {
  id: TabId;
  children: React.ReactNode
}

export function TabPanel(props: Props) {
  const { children, id } = props;
  return (
    <context.Consumer>
      {
        ({ selectId }) => <div style={{ display: (selectId === id) ? 'block':'none' }}>{children}</div>
      }
    </context.Consumer>
  )
}

// export function TabPanel(props: Props) {
//   console.log(props, 'panel')
//   return (
//     <context.Consumer>
//       {
//         ({ selectId, setSelectId }) =>
//           <React.Fragment>
//             {props.tabPanels.map((panel: Content) => props.render(panel))}
//           </React.Fragment>
//       }
//     </context.Consumer>
//   )
// }