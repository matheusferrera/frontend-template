import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import progredirLogo from "../assets/images/novo_logo_progredir.png";

const NavBar = () => {
  const navigate = useNavigate();

  const { user, logout, token } = useAuth();

  const handleLogout = () => {
    logout(token)
      .then(response => {
        alert("Logout realizado com sucesso!");
        console.log("Logout: ", response);
        navigate("/login");
        window.location.reload();
      })
      .catch(error => {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.log(resMessage);
      });
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link
        to={"/"}
        className="navbar-brand"
      >
        <img
          src={progredirLogo}
          alt="Progredir Logo"
          height="30"
          className="d-inline-block align-top"
        />
      </Link>
      <div className="navbar-nav me-auto">
        <li className="nav-item">
          <Link
            to={"/home"}
            className="nav-link"
          >
            Home
          </Link>
        </li>

        {user && (
          <li className="nav-item">
            <Link
              to={"/user"}
              className="nav-link"
            >
              User
            </Link>
          </li>
        )}
      </div>

      {user ? (
        <div className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              to={"/profile"}
              className="nav-link"
            >
              {user.username}
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
              onClick={handleLogout}
            >
              LogOut
            </a>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              to={"/login"}
              className="nav-link"
            >
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to={"/register"}
              className="nav-link"
            >
              Sign Up
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
