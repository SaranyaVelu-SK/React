import React from 'react'

const Settings = ({data,setData}) => {

    const{theme} = data;
    const handleDataChange = (e) =>{
        setData(prevData => ({...prevData,theme:e.target.value}))
    }
  return (
    <div>
        <h4>Theme</h4>
        <div>
            <input type="radio" name="theme" value="dark" checked={theme == "dark"} onChange={(e)=>handleDataChange(e)}/>
            <label>Dark</label>
        </div>
        <div>
            <input type="radio" name="theme" value="light"  checked={theme=="light"} onChange={(e)=>handleDataChange(e)}/>
            <label>Light</label>
        </div>
    </div>
  )
}

export default Settings