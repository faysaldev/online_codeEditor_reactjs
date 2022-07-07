import React from "react";
import SingleCodeEditor from "./SingleCodeEditor";
import "./codeEditorTop.css";

const CodeEditorTop = ({ html, css, js, setHtml, setCss, setJs }) => {
  return (
    <div className="section top-section">
      <SingleCodeEditor
        language="xml"
        displayName="HTML"
        value={html}
        onChange={setHtml}
      />
      <SingleCodeEditor
        language="css"
        displayName="CSS"
        value={css}
        onChange={setCss}
      />
      <SingleCodeEditor
        language="javascript"
        displayName="JS"
        value={js}
        onChange={setJs}
      />
    </div>
  );
};

export default CodeEditorTop;
