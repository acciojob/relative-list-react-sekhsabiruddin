import React from "react";

const App = () => {
  const relativeList = [
    "anjum",
    "khalid",
    "hamid",
    "amber",
    "nabeel",
    "ayan",
    "atyab",
    "ifrah",
    "tabish",
  ];
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key={"relativeList"}>
        {relativeList.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
