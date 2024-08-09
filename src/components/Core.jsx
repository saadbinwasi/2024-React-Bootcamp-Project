import React from 'react'
import { CORE_CONCEPTS } from '../data'
import CoreConcepts from './CoreConcepts'

function Core() {
  return (
    <section id="core-concepts">
    <h2>Time to get started!</h2>
    <ul>
      {CORE_CONCEPTS.map((core,indx) => (
       <CoreConcepts key={indx} title={core.title} desc={core.description} img={core.image}/>
      ))}
   

    </ul>
  
    </section>
  )
}

export default Core
