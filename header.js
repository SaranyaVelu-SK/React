import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return (
        <div style={{display:"flex",justifyContent:"space-between",height:"5vh"}}>
        {console.log("Hello")}
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" style={{width:"100px"}}/>
        <input style={{height:"4vh"}}/>
       
        <img src = "https://img.icons8.com/?size=100&id=3225&format=png&color=000000" style={{width:"50px",paddingRight:"10px"}}/>
    </div>
    )
}

export default Header;