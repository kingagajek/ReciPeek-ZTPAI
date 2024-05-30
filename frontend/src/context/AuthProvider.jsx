import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? { token } : null;
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:8080/api/auth/me', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          console.log('Fetched user data in AuthProvider:', response.data);
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user', error);
        }
      }
    };

    if (auth) {
      fetchUser();
    }
  }, [auth]);

  const login = (data) => {
    localStorage.setItem('token', data.token);
    setAuth(data);
    axios.get('http://localhost:8080/api/auth/me', {
      headers: {
        'Authorization': `Bearer ${data.token}`
      }
    }).then(response => {
      console.log('User data after login in AuthProvider:', response.data);
      setUser(response.data);
    }).catch(error => {
      console.error('Error fetching user after login', error);
    });
  };

  const register = async (login, email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', { login, email, password });
      localStorage.setItem('token', response.data.token);
      setAuth(response.data);
      axios.get('http://localhost:8080/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${response.data.token}`
        }
      }).then(response => {
        console.log('User data after registration in AuthProvider:', response.data);
        setUser(response.data);
      }).catch(error => {
        console.error('Error fetching user after registration', error);
      });
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ auth, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};