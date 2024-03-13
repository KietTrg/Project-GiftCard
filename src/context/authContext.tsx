//node_modules
import React, { createContext, useState } from 'react';
//components
//actions
//selector
//function
//constants
export const AuthContext = createContext<AppContext>({
    login: () => null,
    logout: () => null,
    isLogin: false
});
//styled
type AppContext = {
    isLogin: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthProvider = ({ children }:{children: React.ReactNode}) => {
    // -------------------------- VAR ---------------------------
    // -------------------------- STATE -------------------------
    const [isLogin, setIsLogin] = useState(false);
    // -------------------------- REDUX -------------------------
    // -------------------------- FUNCTION ----------------------
    const login = () => {
      setIsLogin(true);
    };
    const logout = () => {
      setIsLogin(false);
    };
    // -------------------------- EFFECT ------------------------
    // -------------------------- RENDER ------------------------
    // -------------------------- MAIN --------------------------

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
