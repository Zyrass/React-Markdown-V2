// Librairies / Dépendances
import React, { useEffect } from 'react'
import gsap from "gsap"

// Module CSS
import myStyle from "./Header.module.css"

function Header() {

  // Functions
  const titleGsap = name => document.getElementById(name)

  // 
  useEffect(() => {
    gsap.fromTo(titleGsap('h1Start'), {
      x: "-550px"
    }, {
      x: "0",
      duration: 3
    })
    gsap.fromTo(titleGsap("h1End"), {
      x: "550px"
    }, {
      x: "0",
      duration: 3
    })
  })

  return (
    <header className={ myStyle.header }>
        <h1>
          <span 
            id="h1Start" 
            className={ myStyle.h1Start }
          >Markdown</span> 

          &nbsp;

          <span 
            id="h1End" 
            className={ myStyle.h1End }
          >Generator</span> 
        </h1>
    </header>
  )
}

export default Header
