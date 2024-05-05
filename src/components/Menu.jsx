import React from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../routes/routes";
import { useAuth } from "../hooks/auth";

const Menu = () => {
  const auth = useAuth();

  return (
    <nav className="w-[100vw] h-[10vh] bg-[#1e0e77]">
      <ul className="flex justify-around items-center h-full">
        {/* Ejemplo #1 */}
        {/* <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/blog">Blog</Link>
              </li>
              <li>
                  <Link to="/profile">Profile</Link>
              </li> */}

        {/* Ejemplo #2 */}
        {/* <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              to="/profile"
            >
              Profile
            </NavLink>
          </li> */}

        {/* Ejemplo #3 */}
        {routes.map((route, index) => {
          if (route.to === "/login" && auth.user) return null;
          if (route.private && !auth.user) return null;
          return (
            <li key={index}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "gray",
                })}
                to={route.to}
              >
                <span className="text-2xl">{route.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
