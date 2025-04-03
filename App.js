import React from "react"
import ReactDOM from "react-dom/client"
const heading = React.createElement("div",{id:"div1"},
    React.createElement("h1",{},"This is h1 tag"));
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)