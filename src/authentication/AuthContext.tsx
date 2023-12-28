import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { loginApi } from '../util/loginApi';
import { jwtDecode } from 'jwt-decode';

interface AuthContextProps {
  token: string | null;
  userInfo: {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    image: string,
  };
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
  const [userInfo, setUserInfo] = useState<AuthContextProps['userInfo']>({
    id: 0,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    image: ''
  });

  const login = async (username: string, password: string) => {
    try {
      const response = await loginApi(username, password);
      const userInformation = response;
      const authToken = response?.token;

      if (authToken) {
        setToken(authToken);
        setUserInfo(userInformation);
        localStorage.setItem('token', authToken);
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
    userInfo,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
