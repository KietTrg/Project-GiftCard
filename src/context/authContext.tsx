//node_modules
import useSelection from 'antd/es/table/hooks/useSelection';
import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../stores';
//components
//actions
//selector
//function
//constants
export const AuthContext = createContext<AppContext>({
  login: () => null,
  logout: () => null,
  isLogin: false,
  isAdmin: false,
  user: null
});
//styled
type userData = {
  username: string;
  password: string;
}
type AppContext = {
  user: userData | null;
  isLogin: boolean;
  isAdmin: boolean;
  login: (user: userData) => void;
  logout: () => void;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState<userData | null>(null)

  // -------------------------- REDUX -------------------------
  // const { userInfo } = useSelector((state: RootState) => state.user)
  // console.log('userInfo: ', userInfo);
  // console.log('isLogin: ', isLogin);
  // -------------------------- FUNCTION ----------------------
  const login = (user: userData) => {
    setUser(user)
    setIsLogin(true);
  };
  const logout = () => {
    setUser(null)
    setIsLogin(false);
    setIsAdmin(false)
  };
  // -------------------------- EFFECT ------------------------

  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------

  return (
    <AuthContext.Provider value={{ user, isAdmin, isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
