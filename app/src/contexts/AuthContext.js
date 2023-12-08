import React, { createContext, useContext, useState } from "react";
import authService from "../services/auth.service";
import isEqual from "lodash/isEqual";

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
        // Ensure that token is truthy before setting it
        if (token) {
          setToken(token);
          return authService.getAuthUser(token);
        } else {
          throw new Error("Invalid token received");
        }
      })
      .then(userDetails => {
        // Ensure that userDetails is truthy before setting user
        if (userDetails) {
          setUser(userDetails);
        } else {
          throw new Error("Invalid user details received");
        }
      })
      .catch(error => {
        setUser(null);
        setToken(null);
        console.error("Login error:", error);
        // Rethrow the error to propagate it to the calling code
        throw error;
      });
  };

  /**
   * Logout function that handles the user logout process.
   *
   * @return {undefined} No return value.
   */
  const logout = token => {
    return authService
      .logout(token)
      .then(response => {
        setUser(null);
        setToken(null);
        return response;
      })
      .catch(error => {
        setUser(null);
        setToken(null);
        console.error("Logout error:", error);
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

  /**
   * Retrieves the authenticated user details using the provided token.
   *
   * @param {string} token - The authentication token.
   * @return {Promise} A promise that resolves with the user details or rejects with an error.
   */
  const getAuthUser = token => {
    return authService
      .getAuthUser(token)
      .then(userDetails => {
        // Check if the user data has changed before updating the context
        if (!isEqual(userDetails, user)) {
          setUser(userDetails);
        }
      })
      .catch(error => {
        setUser(null);
        console.error("Error fetching authenticated user:", error);
        throw error;
      });
  };

  // Return the child components wrapped in AuthContext.Provider
  return <AuthContext.Provider value={{ user, token, login, logout, register, getAuthUser }}>{children}</AuthContext.Provider>;
};

/**
 * Returns the authentication context.
 *
 * @return {AuthContext} The authentication context.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};
