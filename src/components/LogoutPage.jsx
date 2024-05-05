import React from 'react'
import { useAuth } from '../hooks/auth';

const LogoutPage = () => {

    const auth = useAuth();

    const logout = (e) => {
        e.preventDefault()
        auth.logout();
    }

  return (
    <div className='w-[100vw] h-[90vh] grid place-content-center'>
        <h1 className='text-[4.5vw] text-center'>Logout</h1>
        <form 
            onSubmit={logout}
            className='flex flex-col items-center'
        >
            <p className='roboto text-[1.4vw] mb-4'>¿Estas seguro que quieres cerrar sesion?</p>
            
            <button 
                type="submit"
                className='bg-red-700 text-white text-[1.3vw] px-8 py-2 w-auto rounded-md hover:bg-red-800'
            >
                Cerrar Sesión
            </button>
        </form>
    </div>
  )
}

export default LogoutPage