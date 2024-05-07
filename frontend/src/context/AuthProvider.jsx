import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? { token } : null;
  });

  const login = (data) => {
    localStorage.setItem('token', data.token);
    setAuth(data);
  };

  const register = async (login, email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', { login, email, password });
      console.log("User registered: ", response.data);
      localStorage.setItem('token', response.data.token);
      setAuth(response.data);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
