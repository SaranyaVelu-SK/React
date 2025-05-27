import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./header";
import Pagination from "./Problems/Pagination";
import AutocompleteSearchBar from "./Problems/AutocompleteSearchBar";


const header  = React.createElement("div",{className:"title"},[
    React.createElement("h1",{key:"h1"},"Hello from heading 1"),
    React.createElement("h2",{key:"h2"},"Hello from heading 2"),
    React.createElement("h3",{key:"h3"},"Hello from heading 3"),
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AutocompleteSearchBar />);