// import * as React from 'react'
// import { id } from './typeId'
// import { TabControll } from './tabControll';

// export interface Props {
//   onChange?: (nextId: id, preId: id) => void;
//   children: React.ReactNode;
//   defaultId?: id
// }

// interface State {
//   selectId: id
// }

// export class UnIdControll extends React.Component<Props, State>{
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       selectId: this.props.defaultId
//     }
//   }
//   handleSelectId = (selectId: id, preId: id) => {
//     const { onChange } = this.props;
//     this.setState({ selectId })
//     if (onChange !== undefined) {
//       onChange(selectId, preId)
//     }
//   }
//   render() {
//     const { defaultId, children, onChange, ...reset } = this.props;
//     return (
//       <TabControll
//         selectId={this.state.selectId}
//         onChange={this.handleSelectId}
//         {...reset}
//       >
//         {children}
//       </TabControll>
//     )
//   }
// }