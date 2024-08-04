
import componetimg from '/Users/saadbinwasi/Desktop/final practice react for job/01-starting-project/src/assets/components.png'

import Header from './components/HeaderPage';
import CoreConcepts from './components/CoreConcepts';
import HeaderPage from './components/HeaderPage';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';



function App() {
 const [selectedTopic,setSelectedTopic] = useState('')
  function handleSelect(selectedbutton) {
    setSelectedTopic(selectedbutton)
  }
  
  return (
    <div>
     <HeaderPage/>
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((core,indx) => (
           <CoreConcepts key={indx} title={core.title} desc={core.description} img={core.image}/>
          ))}
       

        </ul>
      
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
        <TabButton isSelected={selectedTopic === 'components'} OnSelect={() => handleSelect("components")}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} OnSelect={() => handleSelect("jsx")}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} OnSelect={() => handleSelect("props")}>PROPS</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} OnSelect={() =>handleSelect("state")}>STATE</TabButton>
          </menu>
          {!selectedTopic ? <p>Please Click any Topic</p> :
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
       
        </section>

      </main>
    </div>
  );
}

export default App;
