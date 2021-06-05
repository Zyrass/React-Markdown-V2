import Marked from 'marked';
import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import myStyle from  './App.module.css';


function App() {

  // State
  const [markdown, setMarkdown] = useState(`# Demo Projet Markdown Generator\n\n
  Je suis un super fière de vous **présenter** ce projet.\n\nCe projet est disponible sur mon github à cette adresse : []()`)

  // Functions
  const changeMarkdownHandler = event => {
    const data = event.target.value;
    setMarkdown(data)
  }

  function loadHTML() {
    const data = ( Marked( markdown, {
      breaks: true
    }))
    return { __html: data }
  }

  return (
    <div className={myStyle.App}>
      <Header />

      <section className={myStyle.container}>
        <div className={myStyle.left}>
          <form action="/" method="post" className={myStyle.form}>
            <textarea 
              className={myStyle.markdown}
              name="markdown"
              id="markdown" 
              placeholder="Veuillez siasir du markdown ici..."
              defaultValue={markdown}
              onChange={(event) => changeMarkdownHandler(event)}
            ></textarea>
          </form>
        </div>

        <div className={myStyle.right}>
          <div 
            className={myStyle.showHTML}
            dangerouslySetInnerHTML={ loadHTML() }
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
