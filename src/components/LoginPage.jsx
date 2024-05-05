import React, { useState } from "react";
import { useAuth } from "../hooks/auth";
import { Navigate } from "react-router-dom/dist";

const LoginPage = () => {
  const auth = useAuth();

  const [alert, setAlert] = useState(false)
  const [userName, setUserName] = useState("");

  const login = (e) => {
    e.preventDefault();
    if(userName === ''){
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 2000)
      return
    }
    setAlert(false)
    auth.login({ userName });
  };

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="grid place-content-center w-[100vw] h-[90vh]">
      <h1 className="text-center text-[4vw]">Login</h1>
      {alert && <p className="my-3 text-red-600 text-center font-medium">Debes ingresar un usuario</p>}
      <form onSubmit={login}>
        <div className="flex w-[30vw] justify-between mb-8">
          <label 
            htmlFor="username"
            className="roboto font-normal text-[1.3vw]"
          >
            Nombre de usuario:
          </label>
          <input
            type="text"
            id="username"
            className="border-[.15vw] border-neutral-700"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="bg-sky-950 text-white text-[1.3vw] px-8 py-2 m-auto rounded-md hover:bg-sky-800 flex justify-center"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
