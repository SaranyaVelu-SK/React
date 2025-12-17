import { useState } from "react"
import ThemeContext from "./themeContext";



const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState("dark");
    function toggleTheme(){
        setTheme(prev => prev=="dark" ? "light" :"dark");
        console.log("toggled")
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;