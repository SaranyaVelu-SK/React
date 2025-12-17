import React, { useContext, useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import ThemeContext from './themeContext';

function ToggleTheme() {
  const {theme,toggleTheme} = useContext(ThemeContext);
  console.log(theme)
  return(
    <div className={theme=== 'dark' ? 'dark':'light'} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <button onClick={toggleTheme} style={{marginTop:"200px",width:"20%",padding:"20px 0px",borderRadius:"8px",fontSize:"20px",cursor:"pointer",backgroundColor:`${theme=='light'? "rgb(39, 38, 38)":""}`,color:`${theme=='light'?"white":""}`}}>Toggle Theme</button>
      <div className='themesDiv'>
      <div id="lightTheme">
        <div>☀️</div>
        <p>Light Theme</p>
      </div>
      <div id="darkTheme">
        <div>🌙</div>
      <p>Dark Theme</p>
      </div>
    </div>
    </div>
  )
}



export default ToggleTheme;