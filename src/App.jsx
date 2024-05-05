// HOOKS
import { MemoryRouter, Routes, Route, HashRouter } from "react-router-dom";
// COMPONENTS
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import BlogPost from "./components/BlogPost";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import ProfilePage from "./components/ProfilePage";
import ErrorPage from './components/ErrorPage'
// CUSTOM HOOKS
import { useAuth, AuthProvider, AuthRoute } from "./hooks/auth";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/** Nested Routes **/}
            <Route path="/blog" element={<BlogPage />}>
              <Route path="/blog/:slug" element={<BlogPost />} />{" "}
              {/** Al indicar con los : y el nombre es la forma en la que indicamos que usamos rutas dinamicas y ese nombre sera la variable que extraeremos en ese componente */}
            </Route>
            {/** Nested Routes **/}
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute> {/* Envolvemos la ruta en el componente que hace la validación para proteger las rutas por URL */}
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute> {/* Envolvemos la ruta en el componente que hace la validación para proteger las rutas por URL */}
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />{" "}
            {/** Página que carga como Not Found **/}
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
