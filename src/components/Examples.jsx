
import TabButton from './TabButton'
import { EXAMPLES } from '../data'
import Section from './Section'
import { useState } from 'react'
import Tabs from './Tabs'


function Examples() {

  const [selectedTopic,setSelectedTopic] = useState('')

  function handleSelect(selectedbutton) {
    setSelectedTopic(selectedbutton)
  }

 const tabContent = () =>  {
    return !selectedTopic ? (
      <p>Please Click any Topic</p>
    ) : (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  } 
  return (
    <Section id="examples" title='Examples' >
      <Tabs 
      ButtonsContainer= "menu"
      buttons={
        <>
    <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect("components")}>Components</TabButton>
    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButton>
    <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect("props")}>PROPS</TabButton>
    <TabButton isSelected={selectedTopic === 'state'} onClick={() =>handleSelect("state")}>STATE</TabButton>
    </>}>
      {tabContent()}
      </Tabs>
      
 



 
  </Section>
  )
}

export default Examples
