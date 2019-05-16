import * as React from 'react'
import { Tab, TabList, Tabs, TabPanel } from './index'
import { id } from './typeId'


export default function TabExample() {
  const [selectId, handleSetId] = React.useState('home');

  // // didmount
  // React.useEffect(() => {
  //   setId('home')
  // }, [])

  // //willupdate
  // React.useEffect(() => {
  //   setId('about')
  // }, [id])
  const handleSelectId = (nextId: id, preId: id) => {
    console.log('handlechange')
    if (typeof (nextId) === 'string') {
      handleSetId(nextId)
    }
  }
  return (
    <Tabs defaultId="home" selectId={selectId} onChange={(nextId, preId) => handleSelectId(nextId, preId)}>
      <TabList>
        <Tab id='home'>React context tabs</Tab>
        <Tab id='about'>What is it?</Tab>
        <Tab id='issues'>I have a problem</Tab>
      </TabList>
      <TabPanel id='home'>
        <p>
          Flexible tabs for React
        </p>
      </TabPanel>
      <TabPanel id='about'>
        <p>
          A fine React library
        </p>
      </TabPanel>
      <TabPanel id='issues'>
        <p>
          Problem? Try our
          <a href="https://github.com/usabilityhub/react-context-tabs/issues">issues</a> page.
        </p>
      </TabPanel>
    </Tabs>
  )
}