import React from "react"
import myStyle from "./Footer.module.css"

function Footer() {
  return (
    <footer className={ myStyle.footer }>
        <span>&copy; 2021</span>
        <span>React v{React.version}</span>
        <span>By Alain Guillon</span>
    </footer>
  )
}

export default Footer
