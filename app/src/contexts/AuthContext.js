import React, { createContext, useContext, useState, useEffect } from "react";
import authService from "../services/auth.service";

const AuthContext = createContext();

/**
 * AuthProvider component that handles user authentication and authorization.
 * @param {object} props - React component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {React.ReactNode} - The rendered child components wrapped in AuthContext.Provider.
 */
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // State variables to store user and token
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check localStorage on initial load
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  /**
   * Function to handle user login.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {Promise} - A promise that resolves to the user details.
   */
  const login = (email, password) => {
    return authService
      .login(email, password)
      .then(token => {
        setToken(token);
        localStorage.setItem("token", token);
        return authService.getAuthUser(token);
      })
      .then(userDetails => {
        // Adicionando permissões de admin por enquanto
        if (userDetails) {
          userDetails.roles = ["ROLE_MODERATOR", "ROLE_ADMIN"];
        }

        setUser(userDetails);
        localStorage.setItem("user", JSON.stringify(userDetails));
      })
      .catch(error => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        console.error("Login error:", error);
        throw error;
      });
  };

  /**
   * Logout function that handles the user logout process.
   *
   * @return {undefined} No return value.
   */
  const logout = token => {
    console.log("Auth Context chamou logout", token);

    return authService
      .logout(token)
      .then(response => {
        const confirmationMessage = response.data.message;
        console.log("Auth Context Logout successful:", confirmationMessage);

        // Lembrar de descomentar
        // setUser(null);
        // setToken(null);
        // localStorage.removeItem("user");
        // localStorage.removeItem("token");
      })
      .catch(error => {
        console.error("Auth Context Logout error:", error);

        // Lembrar de descomentar
        // setUser(null);
        // setToken(null);
        // localStorage.removeItem("user");
        // localStorage.removeItem("token");
        throw error;
      });
  };

  /**
   * Function to handle user registration.
   * @param {string} email - The user's email.
   * @param {string} name - The user's name.
   * @param {string} username - The user's username.
   * @param {string} password - The user's password.
   * @param {string} password_confirmation - The user's password confirmation.
   */
  const register = (email, name, username, password, password_confirmation) => {
    return authService
      .register(email, name, username, password, password_confirmation)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error("Registration error:", error);
        throw error;
      });
  };

  // Return the child components wrapped in AuthContext.Provider
  return <AuthContext.Provider value={{ user, token, login, logout, register }}>{children}</AuthContext.Provider>;
};

/**
 * Returns the authentication context.
 *
 * @return {AuthContext} The authentication context.
 */
export const useAuth = () => {
  return useContext(AuthContext);
};
