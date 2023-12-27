import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { loginApi } from '../util/loginApi';
import { jwtDecode } from 'jwt-decode';

interface AuthContextProps {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  const login = async (username: string, password: string) => {
    try {
      const response = await loginApi(username, password);
      console.log(response);
      const authToken = response?.token;
      const id = response?.id;
      const userName = response?.username;
      const email = response?.email;
      const firstName = response?.firstName;
      const lastName = response?.lastName;
      const gender = response?.gender;
      const image = response?.image;

      if (authToken) {
        setToken(authToken);
        localStorage.setItem('token', authToken);
        localStorage.setItem('id', id);
        localStorage.setItem('userName', userName);
        localStorage.setItem('email', email);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('gender', gender);
        localStorage.setItem('image', image);


      } else {
        throw new Error('Invalid response from the server');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Failed to log in');
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const isTokenExpired = () => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      const decodedToken = jwtDecode(storedToken);
      return decodedToken.exp! < Date.now() / 1000;
    }

    return false;
  };

  useEffect(() => {
    if (token && isTokenExpired()) {
      logout();
    }
  }, [token]);

  const contextValue: AuthContextProps = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
