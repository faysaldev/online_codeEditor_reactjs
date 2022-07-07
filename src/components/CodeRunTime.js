import React from "react";

const CodeRunTime = ({ srcDoc }) => {
  return (
    <div className="section">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default CodeRunTime;
