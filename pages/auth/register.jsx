import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
import postData from '../../business/postData.jsx'

export default function register() {

    const initValues = {
        username:"",
        password:""
    }
    const [status, setStatus] = useState("");
    const [values, setValues] = useState(initValues);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const URL = 'http://localhost:4000/auth/register'
        const response  = await postData(URL, values)
        setStatus(response);
        setValues(initValues);
    }
    const handleChanges = (e)=>{
       
        setValues((prev)=>{
            const name = e.target.name;
            const newValue = e.target.value;
            return (
                {
                    ...prev,
                    [name]: newValue,
                }
            )
        })
    }

  return (
    <div>
      <h2>Register</h2>
      <div className='p-4'>
        <form onSubmit={handleSubmit} className='flex flex-col max-w-sm mx-auto space-y-2'>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' placeholder='username' name="username" value={values.username} onChange={handleChanges} required/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='password' name='password' value={values.password} onChange={handleChanges} required/>

            <input type="submit" className='cursor-pointer bg-red-800 w-fit px-3 py-1'/>
        </form>
      </div>
      <div className='text-center'>
        <p>{status}</p>
        <Link href="/auth/login">Loggin Instead</Link>
      </div>
    </div>
  )
}
