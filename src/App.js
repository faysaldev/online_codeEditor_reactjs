import React, { useState, useEffect } from "react";
import CodeEditorTop from "./components/CodeEditorTop";
import CodeRunTime from "./components/CodeRunTime";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

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
    </head>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
    </html>
      `);
    }, 250);

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
