import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthContextProvider(props) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const contextValue = {
    isAuth,
    token,
    toggleAuth: (val) => {
      setIsAuth((prev) => !prev);
      setToken(val);
    },
    logout: () => {
      setToken();
      setIsAuth(false);
    },
  };
  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthContextProvider;
