// Nested childern with siblings example
// <div id="parent">
//   <div id="child">
//     <h1>h1 tag</h1>
//     <h2>h2 tag</h2>
//   </div>
// </div>

const heading1 = React.createElement("h1", {}, "h1 tag");
const heading2 = React.createElement("h2", {}, "h2 tag");

const child = React.createElement("div", { id: "title" }, [heading1, heading2]);

const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
