import React, { useState, useEffect } from 'react';
import Marked from 'marked';
import gsap from "gsap";
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import myStyle from  './App.module.css';


function App() {

  // State
  const [markdown, setMarkdown] = useState(`# Projet Markdown Generator V2\n\n
  Je suis un super fière de vous **présenter** ce projet.\n\nCe projet est disponible sur mon github à cette [adresse](https://github.com/Zyrass/React-Markdown-V2).\n\n1. Vous pouvez tout effacer, c'est fait pour.\n2. J'ai ajouté quelques animations avec la librairie **Greensock** ( **_gsap_** )\n3. J'espère que ça vous plaira.\n\n\n- Sur Believemy il nous donne les directives à suivre et c'est donc à nous de faire le job.\n- La **V1** est disponible à cette [adresse](https://react-markdown-generator.herokuapp.com/).\n\n\n**Cordialement** **A**lain **G**uillon alias (**Z**yrass)\n\n\n\`PS : Merci à Believemy pour cette idée de projet.\``)

  // Functions
  const changeMarkdownHandler = event => {
    const data = event.target.value;
    setMarkdown(data)
  }

  function loadHTML() {
    const data = ( Marked( markdown, {
      breaks: true
    }))

    return { __html: data}
  }

  useEffect(() => {
    return (
      gsap.fromTo(document.getElementById("htmlGenerate"), {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 2
      })
    )
  })

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
            id="htmlGenerate"
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
