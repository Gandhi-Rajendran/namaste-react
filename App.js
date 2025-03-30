import React from "react";
import ReactDOM from "react-dom/client";

const element = <span>This is an element</span>;
const Title = () => (
  <h1 className="title">{element}React functional component Title</h1>
);

const Heading = () => (
  <div id="container">
    <Title /> // Common used method
    <Title></Title> // We can use like a tag
    {Title()} // Its a js function we can call a funtion inside the curly braces
    <h1 className="heading">React functional component heading</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
