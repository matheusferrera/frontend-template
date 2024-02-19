/* eslint-disable no-undef */

import React from 'react';

import { loginMockData, registerMockData, userMockData } from "../../../test/mockData";


export const AuthContext = React.createContext({
  user: jest.fn().mockResolvedValue(userMockData),
  token: null,
  login: jest.fn().mockResolvedValue(loginMockData),
  logout: jest.fn().mockResolvedValue(null),
  register: jest.fn().mockResolvedValue(registerMockData),
  getAuthUser: jest.fn().mockResolvedValue(userMockData),
});

/**
 * AuthProvider component that handles user authentication and authorization.
 * @param {object} props - React component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {React.ReactNode} - The rendered child components wrapped in AuthContext.Provider.
 */
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{ user: userMockData, token: null }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
