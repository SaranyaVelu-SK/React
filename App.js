const heading = React.createElement("div",{id:"div1"},[
    React.createElement("h1",{},"This is h1 tag"),React.createElement("h2",{},"This is h2 tag")
]);
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)