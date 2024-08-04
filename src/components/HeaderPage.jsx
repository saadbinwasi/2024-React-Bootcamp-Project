import React from 'react'
import '/Users/saadbinwasi/Desktop/final practice react for job/01-starting-project/src/components/Header.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'saad', 'Core'];
import imgheader from '/Users/saadbinwasi/Desktop/final practice react for job/01-starting-project/src/assets/react-core-concepts.png'

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function HeaderPage(){
    const randomword = reactDescriptions[genRandomInt(4)];
    return(
      <header>
      <img src={imgheader} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
      {randomword}  React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    )
  }

export default HeaderPage
