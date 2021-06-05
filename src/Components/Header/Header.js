import myStyle from "./Header.module.css"

function Header() {
  return (
    <header className={ myStyle.header }>
        <h1>Markdown generator</h1>
    </header>
  )
}

export default Header
