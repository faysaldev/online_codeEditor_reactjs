import React, { useState, useEffect } from "react";
import CodeEditorTop from "./components/CodeEditorTop";
import CodeRunTime from "./components/CodeRunTime";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const defalutHtml = `
  <div class='container'>
  <h1> Here wil be The output 😗</h1>
    <p>You don't need to write DOCTYPE HTML and all the boyler code</p>
</div>
  
  `;

  const defaultCss = `
.container{
  text-align:center;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  padding-top:50px
}
  `;

  const defaultJs = `
  const url = "https://www.linkedin.com/in/faysaldev/";
const container = document.querySelector(".container");

// egnore the alert method

container.addEventListener("click", ()=> {
	container.innerHTML= '<h1>Hello Faysal</h1>'
  	console.log('a')
});
  
  `;

  const [html, setHtml] = useLocalStorage("html", defalutHtml);
  const [css, setCss] = useLocalStorage("css", defaultCss);
  const [js, setJs] = useLocalStorage("js", defaultJs);
  const [srcDoc, setSrcDoc] = useState(``);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`

          <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Single Document</title>
        <style>${css}</style>
    </head>
              <body>
              
              ${html}
              
              <script>${js}</script>
              </body>
    </html>
      `);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="container">
      <CodeEditorTop
        html={html}
        css={css}
        js={js}
        setHtml={setHtml}
        setCss={setCss}
        setJs={setJs}
      />
      <CodeRunTime srcDoc={srcDoc} />
    </div>
  );
}

export default App;
