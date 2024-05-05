import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <div className='grid place-content-center w-[100vw] h-[90vh]'>
      <h1 className='text-[6vw] mb-2 text-center'>Ven a Blogearte</h1>
      <p className='roboto font-normal text-center text-[1.5vw] mb-8'>⌨️ Blogearte donde leeras y escribiras post sobre técnologia 🌎</p>
      <button 
        className='bg-sky-950 text-white text-[1.3vw] px-8 py-2 w-min m-auto rounded-md hover:bg-sky-800'
        onClick={() => navigate('/login')}
      >
        Ingresa
      </button>
    </div>
  )
}

export default HomePage