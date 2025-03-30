import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { key: "heading1" }, "h1 tag");
const heading2 = React.createElement("h2", { key: "heading2" }, "h2 tag");

const child = React.createElement("div", { id: "title" }, [heading1, heading2]);

const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
