import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../util';
import { ToastContainer } from 'react-toastify';

function Home() {
  const [loggedInUser,setLoggedInUser] = useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[])

  const handleLogout=(e)=>{
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('token');
    handleSuccess('User LoggedOut');
    setTimeout(()=>{
      navigate('/login');
    },1000)
  }
  
  return (
    <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer/>
    </div>
  )
}

export default Home
