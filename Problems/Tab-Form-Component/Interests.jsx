import React from 'react'

const Interests = ({data,setData}) => {

    const handleDataChange = (e) =>{
        e.target.checked ? setData(prevData => ({...prevData,interests:[...prevData.interests,e.target.name]})) :  setData(prevData => ({...prevData,interests:[...(prevData.interests.filter(pd => pd !==e.target.name))]}))
        
    }

    console.log(data.interests)
    return (
        <div>
            <div>
                <input type='checkbox' name="coding" id="coding"  onChange={(e)=>handleDataChange(e)}/>
                <label>Coding</label>
            </div>
            <div>
                <input type='checkbox' name="gaming" id="gaming"  onChange={(e)=>handleDataChange(e)} />
                <label>Gaming</label>
            </div>
            <div>
                <input type='checkbox' name="reading" id="reading"  onChange={(e)=>handleDataChange(e)}/>
                <label>Reading</label>
            </div>
        </div>
    )
}

export default Interests