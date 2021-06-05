import React from "react"
import myStyle from "./Footer.module.css"

function Footer() {
  return (
    <footer className={ myStyle.footer }>
        <span>&copy; 2021</span>
        <span>React <span className={ myStyle.version }>{React.version}</span></span>
        <span>By <strong>Alain Guillon</strong></span>
    </footer>
  )
}

export default Footer
