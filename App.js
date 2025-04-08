import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./header";


const header  = React.createElement("div",{className:"title"},[
    React.createElement("h1",{key:"h1"},"Hello from heading 1"),
    React.createElement("h2",{key:"h2"},"Hello from heading 2"),
    React.createElement("h3",{key:"h3"},"Hello from heading 3"),
])



const HeaderFunc = function(){
    return (
               <div>
            <h1 style={{color:"rebeccapurple"}}>Hello from heading 1🌺</h1>
            <h2 style={{fontStyle:"italic"}}>Hello from heading 2🌺</h2>
            <h3>Hello from heading 3🌺</h3>
            
        </div>
)
}

const header2 = (
    <div>
        <Header/>
        <h1>Hello from heading 1🔺</h1>
        <h2>Hello from heading 2🔺</h2>
        <h3>Hello from heading 3🔺</h3>
        
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header2);