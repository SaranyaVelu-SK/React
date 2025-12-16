import React from 'react'

const Profile = ({data,setData}) => {

    const {name,age,email} = data;

  const handleDataChange = (e) =>{
    const {name,value} = e.target;
    setData(prevData => ({...prevData,[name]:value}));
  }
  return (
    <div className='profile'>
        <div>
            <label htmlFor="name">Name : </label>
        <input type='text' name='name' id='name' onChange={(e)=>handleDataChange(e)} value={name}/>
        </div>
        <div>
            <label htmlFor="age">Age : </label>
        <input type='text' name='age' id='age' onChange={(e)=>handleDataChange(e)} value={age}/>
        </div>
        <div>
            <label htmlFor="email">Email : </label>
        <input type='email' name='email' id='email' onChange={(e)=>handleDataChange(e)} value={email}/>
        </div>
    </div>
  )
}

export default Profile