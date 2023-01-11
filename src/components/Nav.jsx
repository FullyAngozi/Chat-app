import React from 'react'
import { auth } from "../firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import Signup from './Signup';
import Logout from './Logout';

const Nav = () => {
  const [user] = useAuthState(auth)
  return (
    <div className=' bg-blue-600 h-20 flex justify-between items-center p-4'>
        <h1 className=' text-white text-3xl'>Angozi Chat App</h1>
        {user ? <Logout /> : <Signup />} 
    </div>
  )
}

export default Nav