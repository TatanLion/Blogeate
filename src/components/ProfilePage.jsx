import React from 'react'
import { useAuth } from '../hooks/auth';
import { Navigate } from 'react-router-dom/dist';

const ProfilePage = () => {

  const auth = useAuth();

  // if(!auth.user){ // Redireccionar si el usuario no se ha logeado anteriormente
  //   return <Navigate to="/login" />
  // }

  return (
    <div className='w-[100vw] h-[90vh] grid place-content-center'>
      <h2 className='text-[4.5vw]'>Perfil</h2>
      <p className='text-[1.5vw] my-3'><span className='font-medium text-[1.5vw]'>Welcome,</span> {auth.user.userName}</p>
      <img src="https://picsum.photos/200/300" alt="Image Profile"/>
    </div>
  )
}

export default ProfilePage