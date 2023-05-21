import { createContext, useState } from 'react';

type AuthProvierType = {
  auth: string;
  setAuth: React.Dispatch<React.SetStateAction<string>>;
};

const AuthContext = createContext<AuthProvierType>({
  auth: '',
  setAuth: function (): void {
    throw new Error('Function not implemented.');
  }
});

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState('');

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
