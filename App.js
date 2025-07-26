import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./header";
import Pagination from "./Problems/Pagination";
import AutocompleteSearchBar from "./Problems/AutocompleteSearchBar";
import Accordion from "./Problems/Accordion";
import TodoList from "./Problems/TodoList";
import DarkModeToggle from "./Problems/DarkModeToggle";

  const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js."
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js."
  },
];
const header  = React.createElement("div",{className:"title"},[
    React.createElement("h1",{key:"h1"},"Hello from heading 1"),
    React.createElement("h2",{key:"h2"},"Hello from heading 2"),
    React.createElement("h3",{key:"h3"},"Hello from heading 3"),
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DarkModeToggle/>);