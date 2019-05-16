import * as React from 'react';
import { Tabs } from './tabs';
import { Tab } from './tab';
import { TabPanel } from './tabPanel';
import { TabId } from './id';

const tabs = [
  { id: '1', title: 'hello1' },
  { id: '2', title: 'hello2' },
  { id: '3', title: 'hello3' },
]

export function TabsExample() {
  const [id, handleSetId] = React.useState('1')
  const onChange = (id:TabId) => {
    if(typeof(id) === 'string'){
      handleSetId(id)
    }
  }
  return (
    <Tabs
      selectId={'hello1'}
      setSelectId={(selectId) => onChange(selectId)}
    >
      <Tab
        tabs={tabs}
        render={(tab: any) => <span key={tab.id} onClick={() => onChange(tab.id)} >{tab.title}</span>}
      />
      < TabPanel id="1" >
        <div>content1</div>
      </TabPanel >
      <TabPanel id="2">
        <div>content1</div>
      </TabPanel>
      <TabPanel id="3">
        <div>content1</div>
      </TabPanel>
    </Tabs >
  )
}
