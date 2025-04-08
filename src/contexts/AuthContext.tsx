
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  username: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  // Check authentication status on initial load
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const storedUsername = localStorage.getItem('user');
    
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      setUsername(storedUsername);
    } else {
      setIsAuthenticated(false);
      setUsername(null);
    }
  }, []);

  const login = (user: string) => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', user);
    setIsAuthenticated(true);
    setUsername(user);
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUsername(null);
    navigate('/login');
  };

  const value = {
    isAuthenticated,
    username,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
