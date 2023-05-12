import style from './form.module.css'
import { useState, useEffect } from 'react'
import { validation } from '../../validation';


const Form = ({login})=>{

   const [errors, setErrors]=useState({
    email:'',
    password:''
   });

   
   
   const [userData, SetUserData]=useState({
       email:'',
       password:''
    });
    
    const handleData = (event) =>{
        SetUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    setErrors(validation({
        ...userData,
        [event.target.name] : event.target.value
    }))
    }

    const handleSumbmit = (event) => {
        event.preventDefault();
        login(userData)
    }

return(
<div>

<form onSubmit={handleSumbmit}>
  
    <label htmlFor="email">Email:</label>
<input type="text" name='email'
 value={userData.email} className={style.login}  onChange={handleData}/>
 {errors.email && <p>{errors.email}</p>}

<label htmlFor="password">Password:</label>
<input type="text" name='password'
 value={userData.password} className={style.login} onChange={handleData}/>
    {errors.password && <p>{errors.password}</p>}
    <button type='submit'>LOGIN</button>
    
</form>
</div>
        
    )
}

export default Form 