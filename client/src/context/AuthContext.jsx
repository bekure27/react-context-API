import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.status === 200) {
        setUser({ username });
        navigate('/home');
       
      }
    } catch (error) {
      console.error('Authentication error:', error.response.data.error);
      setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
  };


  const register = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/register', { username, password });
      if (response.status === 201) {
        login(username, password);
      }
    } catch (error) {
      console.error('Registration error:', error.response.data.error);
      setUser(null);
    }
  };

  return <AuthContext.Provider value={{ user, login, logout,register }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
