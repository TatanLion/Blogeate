import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom/dist";

const adminList = ['TatanLion', 'Advimu', 'AdminGod']; // Lista de los Admin

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Ahora necesitamos darle un valor a nuestro usuario
  const login = ({ userName }) => {
    const isAdmin = adminList.find(admin => admin === userName) // Identificamos si el usuario que se logeo es Admin
    setUser({ userName, isAdmin });
    /* Ahora cada vez que hagamos login nos redireccionará a la página de profile */
    navigate("/profile");
  };

  // De la misma forma, debemos poder cerrar la sesión
  const logout = () => {
    setUser(null);
    /* Aquí haremos redirect a la página principal */
    navigate("/");
  };

  const auth = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export {
  AuthProvider,
  AuthRoute,
  useAuth,
};