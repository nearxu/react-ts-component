import * as React from 'react'
import { Tab, TabList, Tabs, TabPanel } from './index'

export default function TabExample() {
  return (
    <Tabs defaultId='home' selectId="home">
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