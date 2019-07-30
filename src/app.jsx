import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
const App = () => {
  return (
    <div>
      <p>React here!</p>
    </div>
  );
};

const x = renderToStaticMarkup(<App />);
export default x;