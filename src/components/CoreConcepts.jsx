import React from 'react'

function CoreConcepts(props) {
    return (
      <li>
        <img src={props.img} alt='..'/>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
  
      </li>
    )
  }

export default CoreConcepts
